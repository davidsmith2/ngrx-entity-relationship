import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ArtistCollection } from '../store/collections/artist.collection';
import { reduceGraph, rootEntity } from 'ngrx-entity-relationship';
import { AlbumCollection } from '../store/collections/album.collection';

@Injectable()
export class RelatedEntityResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
    private artistCollection: ArtistCollection,
    private albumCollection: AlbumCollection
  ) {
  }
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    this.artistCollection.addManyToCache([]);
    this.albumCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            name: 'artist1',
            albumTitle: 'album1',
          }
        ],
        selector: rootEntity(this.artistCollection),
      }),
    );
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            title: 'album1',
          }
        ],
        selector: rootEntity(this.albumCollection),
      }),
    );
    return of(true);
  }
}
