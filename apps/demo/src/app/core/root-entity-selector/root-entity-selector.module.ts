import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootEntitySelectorComponent } from './root-entity-selector.component';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { reduceGraph, rootEntitySelector } from 'ngrx-entity-relationship';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RootEntitySelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootEntitySelectorComponent
      }
    ])
  ],
  exports: [
    RootEntitySelectorComponent
  ]
})
export class RootEntitySelectorModule {
  constructor(
    private store: Store,
    private artistCollection: ArtistCollection

  ) {
    this.artistCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            name: 'artist1',
          }
        ],
        selector: rootEntitySelector(this.artistCollection)(),
      }),
    );
  }
}
