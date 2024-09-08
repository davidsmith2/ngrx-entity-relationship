import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { reduceGraph, relationships, rootEntitySelector } from "ngrx-entity-relationship";
import { map, Observable } from "rxjs";
import { Artist } from "../../data/artist/artist.interface";

@Injectable()
export class RootEntitySelectorService {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map((entities: Array<Artist>) => entities[0]),
    relationships(
      this.store,
      rootEntitySelector(this.artistCollection)()
    )
  );
  
  constructor(
    private store: Store,
    private artistCollection: ArtistCollection
  ) { }

  hydrateCache() {
    this.artistCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            name: 'artist1',
          }
        ],
        selector: this.createRootEntitySelector(),
      }),
    );
  }

  createRootEntitySelector() {
    return rootEntitySelector(this.artistCollection)();
  }
}

