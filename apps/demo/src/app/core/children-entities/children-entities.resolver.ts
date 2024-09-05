import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { SongCollection } from '../../data/song/song.collection';
import { AlbumCollection } from '../../data/album/album.collection';
import { reduceGraph, rootEntity } from 'ngrx-entity-relationship';

@Injectable({
  providedIn: 'root'
})
export class ChildrenEntitiesResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
    private albumCollection: AlbumCollection,
    private songCollection: SongCollection
  ) {
  }
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    this.albumCollection.addManyToCache([]);
    this.songCollection.addManyToCache([]);
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            title: 'album1'
          }
        ],
        selector: rootEntity(this.albumCollection),
      }),
    );
    this.store.dispatch(
      reduceGraph({
        data: [
          {
            title: 'song1',
            albumTitle: 'album1'
          },
          {
            title: 'song2',
            albumTitle: 'album1'
          }
        ],
        selector: rootEntity(this.songCollection),
      }),
    );
    return of(true);
  }
}
