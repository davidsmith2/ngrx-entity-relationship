import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators'
import { childrenEntitiesSelector, relationships, rootEntitySelector } from 'ngrx-entity-relationship';
import { AlbumCollection } from '../../data/album/album.collection';
import { Album } from '../../data/album/album.interface';
import { SongCollection } from '../../data/song/song.collection';

@Injectable({
  providedIn: 'root'
})
export class ChildrenEntitiesSelectorService {
  public readonly childrenEntitiesSelector1$: Observable<Album> = this.albumCollection.selectors$.entities$.pipe(
    map((entities: Array<Album>) => entities[0]),
    relationships(
      this.store,
      rootEntitySelector(this.albumCollection)(
        childrenEntitiesSelector(this.songCollection, 'albumTitle', 'songs')()
      )
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly albumCollection: AlbumCollection,
    protected readonly songCollection: SongCollection
  ) { }
}
