import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenEntitiesSelectorComponent } from './children-entities-selector.component';
import { Store } from '@ngrx/store';
import { AlbumCollection } from '../../data/album/album.collection';
import { SongCollection } from '../../data/song/song.collection';
import { childrenEntitiesSelector, reduceGraph, rootEntitySelector } from 'ngrx-entity-relationship';

@NgModule({
  declarations: [
    ChildrenEntitiesSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildrenEntitiesSelectorComponent
  ]
})
export class ChildrenEntitiesSelectorModule {
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
                albumTitle: 'album1',
              },
              {
                title: 'song2',
                albumTitle: 'album1',
              }
            ]
          }
        ],
        selector: rootEntitySelector(this.albumCollection)(
          childrenEntitiesSelector(this.songCollection, 'albumTitle', 'songs')()
        ),
      }),
    );
  }
}
