import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { AlbumCollection } from "../../data/album/album.collection";
import { childEntitySelector, reduceGraph, relationships, rootEntitySelector } from "ngrx-entity-relationship";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Artist } from "../../data/artist/artist.interface";

@Injectable()
export class ChildEntitySelectorService {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map((entities: Array<Artist>) => entities[0]),
    relationships(
      this.store,
      this.createRootEntitySelector()
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection,
    protected readonly albumCollection: AlbumCollection
  ) { }

  hydrateCache() {
    this.artistCollection.addManyToCache([]);
    this.albumCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            name: 'artist1',
            album: {
              title: 'album1',
              artistName: 'artist1',
            }
          },
        ],
        selector: this.createRootEntitySelector(),
      }),
    );
  }

  createRootEntitySelector() {
    return rootEntitySelector(this.artistCollection)(
      childEntitySelector(this.albumCollection, 'artistName', 'album')()
    );
  }

}