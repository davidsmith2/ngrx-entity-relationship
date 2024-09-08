import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEntitySelectorComponent } from './child-entity-selector.component';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { AlbumCollection } from '../../data/album/album.collection';
import { childEntitySelector, reduceGraph, rootEntitySelector } from 'ngrx-entity-relationship';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ChildEntitySelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildEntitySelectorComponent
      }
    ])
  ],
  exports: [
    ChildEntitySelectorComponent
  ]
})
export class ChildEntitySelectorModule {
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
              artistName: 'artist1',
            }
          },
        ],
        selector: rootEntitySelector(this.artistCollection)(
          childEntitySelector(this.albumCollection, 'artistName', 'album')()
        ),
      }),
    );
  }
}
