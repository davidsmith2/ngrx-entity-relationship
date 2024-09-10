import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { reduceGraph, relatedEntity, relationships, rootEntity } from "ngrx-entity-relationship";
import { AlbumCollection } from "../../data/album/album.collection";
import { map, Observable } from "rxjs";
import { Artist } from "../../data/artist/artist.interface";

@Injectable()
export class RootEntityService {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map((entities: Array<Artist>) => entities[0]),
    relationships(
      this.store,
      this.createRootEntitySelector()
    )
  );
  
  constructor(
    private store: Store,
    private artistCollection: ArtistCollection,
    private albumCollection: AlbumCollection
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
              title: 'album1'
            }
          }
        ],
        selector: this.createRootEntitySelector(),
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

