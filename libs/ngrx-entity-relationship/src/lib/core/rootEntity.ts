import {rootEntityFlags} from './rootEntityFlags';
import {
    CACHE,
    CACHE_CHECKS_SET,
    FEATURE_SELECTOR,
    HANDLER_RELATED_ENTITY,
    HANDLER_ROOT_ENTITY,
    ID_TYPES,
    ROOT_SELECTOR_FACTORY_CONFIG,
    STORE_SELECTOR,
    TRANSFORMER,
    UNKNOWN,
} from './types';
import {argsToArray, mergeCache, normalizeSelector, rootSelectorFactoryArgsToConfig, verifyCache} from './utils';

export function rootEntity<STORE, ENTITY>(
    featureSelector: FEATURE_SELECTOR<STORE, ENTITY>,
    ...relationships: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>
): HANDLER_ROOT_ENTITY<STORE, ENTITY, ENTITY, ID_TYPES>;

export function rootEntity<STORE, ENTITY>(
    featureSelector: FEATURE_SELECTOR<STORE, ENTITY>,
    meta: SELECTOR_META,
    ...relationships: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>
): HANDLER_ROOT_ENTITY<STORE, ENTITY, ENTITY, ID_TYPES>;

export function rootEntity<STORE, ENTITY, TRANSFORMED>(
    featureSelector: FEATURE_SELECTOR<STORE, ENTITY>,
    transformer: TRANSFORMER<ENTITY, TRANSFORMED>,
    ...relationships: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>
): HANDLER_ROOT_ENTITY<STORE, ENTITY, TRANSFORMED, ID_TYPES>;

export function rootEntity<STORE, ENTITY, TRANSFORMED>(
    featureSelector: FEATURE_SELECTOR<STORE, ENTITY>,
    transformer: TRANSFORMER<ENTITY, TRANSFORMED>,
    meta: SELECTOR_META,
    ...relationships: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>
): HANDLER_ROOT_ENTITY<STORE, ENTITY, TRANSFORMED, ID_TYPES>;

export function rootEntity<STORE, ENTITY, TRANSFORMED>(
    featureSelector: FEATURE_SELECTOR<STORE, ENTITY>,
    guess1?: TRANSFORMER<ENTITY, TRANSFORMED> | SELECTOR_META | HANDLER_RELATED_ENTITY<STORE, ENTITY>,
    guess2?: SELECTOR_META | HANDLER_RELATED_ENTITY<STORE, ENTITY>,
): HANDLER_ROOT_ENTITY<STORE, ENTITY, ENTITY | TRANSFORMED, ID_TYPES> {

    const rootSelectorFactoryConfig: ROOT_SELECTOR_FACTORY_CONFIG<STORE, ENTITY, TRANSFORMED> = rootSelectorFactoryArgsToConfig(argsToArray(arguments), guess1, guess2);

    const {collection: collectionSelector, id: idSelector} = normalizeSelector(featureSelector);

    const cacheLevel = '0';
    const cache: CACHE<STORE> = new Map();

    const callback = (
        state: STORE,
        idOrSelector: undefined | null | ID_TYPES | STORE_SELECTOR<STORE, undefined | null | ID_TYPES>,
    ) => {
        const id = typeof idOrSelector === 'function' ? idOrSelector(state) : idOrSelector;
        if (!id) {
            return;
        }

        const featureState = collectionSelector(state);
        let cacheDataLevel = cache.get(cacheLevel);
        if (!cacheDataLevel) {
            cacheDataLevel = new Map();
            cache.set(cacheLevel, cacheDataLevel);
        }

        const cacheHash = `#${id}`;
        let [checks, value]: [CACHE_CHECKS_SET<STORE>, UNKNOWN] = cacheDataLevel.get(cacheHash) || [
            new Map(),
            undefined,
        ];
        if (rootEntityFlags.disabled) {
            return value;
        }
        if (verifyCache(state, checks)) {
            return value;
        }

        // building a new value.
        value = undefined;
        checks = new Map();
        const checkIds = new Map();
        checks.set(collectionSelector, checkIds);
        checkIds.set(null, featureState.entities);
        checkIds.set(id, featureState.entities[id]);

        // the entity does not exist.
        if (!featureState.entities[id]) {
            cacheDataLevel.set(cacheHash, [checks, value]);
            return value;
        }

        // we have to clone it because we are going to update it with relationships.
        value = {...featureState.entities[id]} as ENTITY;

        let cacheRelLevelIndex = 0;
        for (const relationship of rootSelectorFactoryConfig.relationships) {
            const cacheRelLevel = `${cacheLevel}:${cacheRelLevelIndex}`;
            const cacheRelHash = relationship(cacheRelLevel, state, cache, value, idSelector);
            cacheRelLevelIndex += 1;
            if (cacheRelHash) {
                mergeCache(cache.get(cacheRelLevel)?.get(cacheRelHash)?.[0], checks);
            }
        }

        value = rootSelectorFactoryConfig.transformer ? rootSelectorFactoryConfig.transformer(value) : value;
        cacheDataLevel.set(cacheHash, [checks, value]);
        return value;
    };
    callback.ngrxEntityRelationship = 'rootEntity';
    callback.collectionSelector = collectionSelector;
    callback.meta = rootSelectorFactoryConfig.meta;
    callback.idSelector = idSelector;
    callback.relationships = rootSelectorFactoryConfig.relationships;
    callback.release = () => {
        cache.clear();
        for (const relationship of rootSelectorFactoryConfig.relationships) {
            relationship.release();
        }
    };

    return callback;
}
