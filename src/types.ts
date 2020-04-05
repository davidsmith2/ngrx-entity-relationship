import {EntityState} from '@ngrx/entity';
import {Observable} from 'rxjs';

export type UNKNOWN = any;

export type STORE_SELECTOR<T, V> = (state: T) => V;

export type STORE_INSTANCE<T> = {
    select<K, Props>(mapFn: (state: T, props: Props) => K, props: Props): Observable<K>;
};

export type FILTER_PROPS<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
}[keyof Base];

export type FEATURE_SELECTOR<STORE, ENTITY> =
    | STORE_SELECTOR<STORE, EntityState<ENTITY>>
    | {
          selectors: {
              selectCollection: STORE_SELECTOR<STORE, EntityState<ENTITY>>;
          };
      };

export type HANDLER_CACHE<STORE, ENTITY> = Array<
    [string, STORE_SELECTOR<STORE, EntityState<ENTITY>>, ID_TYPES | null, ENTITY?, ENTITY?]
>;

export type HANDLER_ROOT_ENTITY<S, E, I> = (state: S, id: I) => undefined | E;

export type HANDLER_ROOT_ENTITIES<S, E, I> = (state: S, id: Array<I>) => Array<E>;

export type HANDLER_RELATED_ENTITY<S, E> = {
    (cachePrefix: string, state: S, cacheRefs: HANDLER_CACHE<S, UNKNOWN>, source: E): void;
    ngrxEntityRelationship: string;
};

export type EMPTY_TYPES = undefined | null;

export type ID_TYPES = string | number;

export type ID_FILTER_PROPS<RELATED_ENTITY, TYPES> = NonNullable<FILTER_PROPS<RELATED_ENTITY, TYPES | EMPTY_TYPES>>;

export type VALUES_FILTER_PROPS<PARENT_ENTITY, RELATED_ENTITY> = NonNullable<
    FILTER_PROPS<PARENT_ENTITY, RELATED_ENTITY | EMPTY_TYPES>
>;

export type TRANSFORMER<T> = (entity: T) => T;

export const isBuiltInSelector = <STORE, ENTITY>(value: UNKNOWN): value is HANDLER_RELATED_ENTITY<STORE, ENTITY> => {
    return value && value.ngrxEntityRelationship;
};

export const isHandlerRootEntity = <S, E, I>(value: UNKNOWN): value is HANDLER_ROOT_ENTITY<S, E, I> => {
    return isBuiltInSelector(value) && value.ngrxEntityRelationship === 'rootEntity';
};

export const isFeatureSelector = <STORE, ENTITY>(value: UNKNOWN): value is FEATURE_SELECTOR<STORE, ENTITY> => {
    return (
        isSelector(value) ||
        (typeof value === 'object' &&
            typeof value.selectors === 'object' &&
            isSelector(value.selectors.selectCollection))
    );
};

export const isSelector = <STORE, ENTITY>(value: UNKNOWN): value is STORE_SELECTOR<STORE, EntityState<ENTITY>> => {
    return typeof value === 'function' && !isBuiltInSelector(value);
};