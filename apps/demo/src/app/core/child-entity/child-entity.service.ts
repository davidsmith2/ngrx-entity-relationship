import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../store/collections/artist.collection';
import { AlbumCollection } from '../store/collections/album.collection';
import { map, Observable } from 'rxjs';
import { Artist } from '../store/models';
import { childEntity, relationships, rootEntity } from 'ngrx-entity-relationship';

@Injectable({
  providedIn: 'root'
})
export class ChildEntityService {
  public readonly childEntity1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map(entities => entities[0]),
    relationships(
      this.store,
      rootEntity(
        this.artistCollection,
        childEntity(this.albumCollection, 'artistName', 'album')
      )
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection,
    protected readonly albumCollection: AlbumCollection

  ) { }
}
