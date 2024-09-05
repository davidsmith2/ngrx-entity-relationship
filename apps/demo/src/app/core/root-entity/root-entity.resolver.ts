import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArtistCollection } from '../store/collections/artist.collection';
import { Store } from '@ngrx/store';
import { reduceGraph, rootEntity } from 'ngrx-entity-relationship';

@Injectable()
export class RootEntityResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
    private artistCollection: ArtistCollection
  ) {
  }
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    this.artistCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            name: 'artist1',
          },
          {
            name: 'artist2',
          },
        ],
        selector: rootEntity(this.artistCollection),
      }),
    );
    return of(true);
  }
}
