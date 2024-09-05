import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { reduceGraph, rootEntity } from 'ngrx-entity-relationship';
import { AlbumCollection } from '../../data/album/album.collection';
import { ArtistCollection } from '../../data/artist/artist.collection';

@Injectable()
export class ChildEntityResolver implements Resolve<boolean> {
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
            name: 'artist1'
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
            artistName: 'artist1'
          }
        ],
        selector: rootEntity(this.albumCollection),
      }),
    );
    return of(true);
  }
}
