import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedEntitySelectorComponent } from './related-entity-selector.component';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { AlbumCollection } from '../../data/album/album.collection';
import { reduceGraph, relatedEntitySelector, rootEntitySelector } from 'ngrx-entity-relationship';

@NgModule({
  declarations: [
    RelatedEntitySelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RelatedEntitySelectorComponent
  ]
})
export class RelatedEntitySelectorModule {
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
            albumTitle: 'album1',
            album: {
              title: 'album1',
            }
          },
          {
            name: 'artist2',
          },
        ],
        selector: rootEntitySelector(this.artistCollection)(
          relatedEntitySelector(this.albumCollection, 'albumTitle', 'album')()
        ),
      }),
    );
  }
}
