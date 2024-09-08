import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Artist } from "../../data/artist/artist.interface";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { Store } from "@ngrx/store";
import { reduceGraph, relationships, rootEntities, rootEntity } from "ngrx-entity-relationship";

@Injectable()
export class RootEntitiesService {
  example1$: Observable<Array<Artist>> = this.artistCollection.selectors$.entities$.pipe(
    relationships(
      this.store,
      this.createRootEntitySelector()
    )
  );
  
  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection
  ) { }

  hydrateCache() {
    this.artistCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            name: 'artist1',
          },
          {
            name: 'artist2',
          },
        ],
        selector: this.createRootEntitySelector(),
      }),
    );
  }

  createRootEntitySelector() {
    return rootEntities(rootEntity(this.artistCollection));
  }
}