import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { reduceGraph, relatedEntitySelector, rootEntitySelector } from 'ngrx-entity-relationship';
import { AlbumCollection } from '../../data/album/album.collection';

@Injectable({
  providedIn: 'root'
})
export class RelatedEntitySelectorResolver implements Resolve<boolean> {
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
    return of(true);
  }
}
