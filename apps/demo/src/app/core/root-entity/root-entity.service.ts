import { Injectable } from "@angular/core";
import { relationships, rootEntity } from "ngrx-entity-relationship";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { Fight } from "../store/models";
import { FightCollection } from "../store/collections/fight.collection";

export class TransformedFight {
  constructor(public fight: Fight) { }
}

@Injectable()
export class RootEntityService {
  public readonly rootEntity1$: Observable<Fight> = this.fight.selectors$.entities$.pipe(
    map((entities: Array<Fight>) => entities[0]),
    relationships(
      this.store,
      rootEntity(this.fight)
    )
  );

  public readonly rootEntity2$: Observable<TransformedFight> = this.fight.selectors$.entities$.pipe(
    map((entities: Array<Fight>) => entities[0]),
    relationships(
      this.store,
      rootEntity(
        this.fight,
        (entity: Fight) => new TransformedFight(entity)
      )
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly fight: FightCollection
  ) { }
}