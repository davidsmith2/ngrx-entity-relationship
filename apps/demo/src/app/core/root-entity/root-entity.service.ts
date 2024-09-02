import { Injectable } from "@angular/core";
import { relatedEntity, relationships, rootEntity } from "ngrx-entity-relationship";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { Fight } from "../store/models";
import { FightCollection } from "../store/collections/fight.collection";
import { HeroCollection } from "../store/collections/hero.collection";

@Injectable()
export class RootEntityService {
    public readonly fight$: Observable<Fight> = this.fight.selectors$.entities$.pipe(
      map((entities: Array<Fight>) => entities[0]),
      relationships(
        this.store,
        rootEntity(
          this.fight,
          relatedEntity(this.hero, 'heroId', 'hero')
        )
      )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly fight: FightCollection,
    protected readonly hero: HeroCollection
  ) {
    console.log('hello, world!')
  }
}