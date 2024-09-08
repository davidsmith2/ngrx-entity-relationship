import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { childEntitySelector, reduceGraph, rootEntitySelector } from 'ngrx-entity-relationship';
import { AlbumCollection } from '../../data/album/album.collection';

@Injectable({
  providedIn: 'root'
})
export class ChildEntitySelectorResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
    private artistCollection: ArtistCollection,
    private albumCollection: AlbumCollection
  ) { }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
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
          {
            name: 'artist2',
          },
        ],
        selector: rootEntitySelector(this.artistCollection)(
          childEntitySelector(this.albumCollection, 'artistName', 'album')()
        ),
      }),
    );
    return of(true);
  }
}
