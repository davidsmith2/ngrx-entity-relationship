import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { AlbumCollection } from "../../data/album/album.collection";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Artist } from "../../data/artist/artist.interface";
import { reduceGraph, relatedEntity, relationships, rootEntity } from "ngrx-entity-relationship";

@Injectable()
export class RelatedEntityService {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map(entities => entities[0]),
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
            albumTitle: 'album1',
            album: {
              title: 'album1',
            }
          }
        ],
        selector: this.createRootEntitySelector()
      }),
    );
  }

  createRootEntitySelector() {
    return rootEntity(
      this.artistCollection,
      relatedEntity(this.albumCollection, 'albumTitle', 'album')
    );
  }

}