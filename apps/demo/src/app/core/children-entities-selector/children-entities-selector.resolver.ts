import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { childrenEntitiesSelector, reduceGraph, rootEntitySelector } from 'ngrx-entity-relationship';
import { AlbumCollection } from '../../data/album/album.collection';
import { SongCollection } from '../../data/song/song.collection';

@Injectable({
  providedIn: 'root'
})
export class ChildrenEntitiesSelectorResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
    private albumCollection: AlbumCollection,
    private songCollection: SongCollection
  ) { }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
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
    return of(true);
  }
}
