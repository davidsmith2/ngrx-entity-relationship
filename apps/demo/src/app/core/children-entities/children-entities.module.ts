import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenEntitiesComponent } from './children-entities.component';
import { Store } from '@ngrx/store';
import { AlbumCollection } from '../../data/album/album.collection';
import { SongCollection } from '../../data/song/song.collection';
import { childrenEntities, reduceGraph, rootEntity } from 'ngrx-entity-relationship';

@NgModule({
  declarations: [
    ChildrenEntitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildrenEntitiesComponent
  ]
})
export class ChildrenEntitiesModule {
  constructor(
    private store: Store,
    private albumCollection: AlbumCollection,
    private songCollection: SongCollection
  ) {
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
        selector: rootEntity(
          this.albumCollection,
          childrenEntities(this.songCollection, 'albumTitle', 'songs')
        ),
      }),
    );
  }
}
