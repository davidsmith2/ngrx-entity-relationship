import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AlbumCollection } from "../../data/album/album.collection";
import { SongCollection } from "../../data/song/song.collection";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Album } from "../../data/album/album.interface";
import { childrenEntities, reduceGraph, relationships, rootEntity } from "ngrx-entity-relationship";

@Injectable()
export class ChildrenEntitiesService {
  example1$: Observable<Album> = this.albumCollection.selectors$.entities$.pipe(
    map(entities => entities[0]),
    relationships(
      this.store,
      this.createRootEntitySelector()
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly albumCollection: AlbumCollection,
    protected readonly songCollection: SongCollection
  ) { }

  hydrateCache() {
    this.albumCollection.addManyToCache([]);
    this.songCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            title: 'album1',
            songs: [
              {
                title: 'song1',
                albumTitle: 'album1'
              },
              {
                title: 'song2',
                albumTitle: 'album1'
              }
            ]
          }
        ],
        selector: this.createRootEntitySelector(),
      }),
    );
  }

  createRootEntitySelector() {
    return rootEntity(
      this.albumCollection,
      childrenEntities(this.songCollection, 'albumTitle', 'songs')
    );
  }
}