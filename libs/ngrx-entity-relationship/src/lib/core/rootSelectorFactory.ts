import { HANDLER_RELATED_ENTITY, isBuiltInSelector, isSelectorMeta, TRANSFORMER } from "./types";

export interface RootSelectorFactoryConfig<STORE, ENTITY, TRANSFORMED> {
  relationships: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>;
  meta: SELECTOR_META;
  transformer?: undefined | TRANSFORMER<ENTITY, TRANSFORMED>;
}

export class RootSelectorFactory<STORE, ENTITY, TRANSFORMED> {
  argsToConfig(
    args: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>,
    guess1?: TRANSFORMER<ENTITY, TRANSFORMED> | SELECTOR_META | HANDLER_RELATED_ENTITY<STORE, ENTITY>,
    guess2?: SELECTOR_META | HANDLER_RELATED_ENTITY<STORE, ENTITY>
  ): RootSelectorFactoryConfig<STORE, ENTITY, TRANSFORMED> {
    let relationships = args.slice(1);
    let transformer: undefined | TRANSFORMER<ENTITY, TRANSFORMED>;
    let meta: SELECTOR_META = {};
        if (!isBuiltInSelector<STORE, ENTITY>(guess1) && !isSelectorMeta(guess1)) {
        transformer = guess1;
        relationships = relationships.slice(1);
    }
    if (!isBuiltInSelector<STORE, ENTITY>(guess1) && isSelectorMeta(guess1)) {
        meta = guess1;
        relationships = relationships.slice(1);
    }
    if (!isBuiltInSelector<STORE, ENTITY>(guess2) && isSelectorMeta(guess2)) {
        meta = guess2;
        relationships = relationships.slice(1);
    }
    return {
      relationships,
      transformer,
      meta
    };
  }
}

