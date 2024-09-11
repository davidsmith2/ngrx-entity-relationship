import { HANDLER_RELATED_ENTITY, isSelectorMeta } from "./types";

export interface RelationshipSelectorFactoryConfig<STORE, ENTITY> {
  relationships: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>;
  meta: SELECTOR_META;
}

export class RelationshipSelectorFactory<STORE, ENTITY> {
  argsToConfig(
    args: Array<HANDLER_RELATED_ENTITY<STORE, ENTITY>>
  ): RelationshipSelectorFactoryConfig<STORE, ENTITY> {
    let relationships = args.slice(3);
    let meta: SELECTOR_META = {};
    if (isSelectorMeta(relationships[0])) {
        meta = relationships[0];
        relationships = relationships.slice(1);
    }
    return {
      relationships,
      meta
    };
  }
}
