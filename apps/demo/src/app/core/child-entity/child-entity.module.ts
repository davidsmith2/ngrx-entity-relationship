import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEntityComponent } from './child-entity.component';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { AlbumCollection } from '../../data/album/album.collection';
import { childEntity, reduceGraph, rootEntity } from 'ngrx-entity-relationship';

@NgModule({
  declarations: [
    ChildEntityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildEntityComponent
  ]
})
export class ChildEntityModule {
  constructor(
    private store: Store,
    private artistCollection: ArtistCollection,
    private albumCollection: AlbumCollection
  ) {
    this.artistCollection.addManyToCache([]);
    this.albumCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            name: 'artist1',
            album: {
              title: 'album1',
              artistName: 'artist1'
            }
          }
        ],
        selector: rootEntity(
          this.artistCollection,
          childEntity(this.albumCollection, 'artistName', 'album')
        ),
      }),
    );    
  }
}
