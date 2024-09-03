import { Injectable } from "@angular/core";
import { relationships, rootEntities, rootEntity } from "ngrx-entity-relationship";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Fight } from "../store/models";
import { FightCollection } from "../store/collections/fight.collection";

@Injectable()
export class RootEntitiesService {
  public readonly rootEntities$: Observable<Array<Fight>> = this.fight.selectors$.entities$.pipe(
    relationships(
      this.store,
      rootEntities(rootEntity(this.fight))
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly fight: FightCollection
  ) { }
}