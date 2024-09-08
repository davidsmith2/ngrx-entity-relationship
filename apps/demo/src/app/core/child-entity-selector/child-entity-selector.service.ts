import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../data/artist/artist.interface';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { map } from 'rxjs/operators'
import { childEntitySelector, relationships, rootEntitySelector } from 'ngrx-entity-relationship';
import { AlbumCollection } from '../../data/album/album.collection';

@Injectable({
  providedIn: 'root'
})
export class ChildEntitySelectorService {
  public readonly childEntitySelector1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map((entities: Array<Artist>) => entities[0]),
    relationships(
      this.store,
      rootEntitySelector(this.artistCollection)(
        childEntitySelector(this.albumCollection, 'artistName', 'album')()
      )
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection,
    protected readonly albumCollection: AlbumCollection
  ) { }
}
