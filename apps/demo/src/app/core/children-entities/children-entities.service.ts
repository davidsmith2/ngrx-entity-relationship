import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SongCollection } from '../../data/song/song.collection';
import { AlbumCollection } from '../../data/album/album.collection';
import { childrenEntities, relationships, rootEntity } from 'ngrx-entity-relationship';
import { map } from 'rxjs/operators';
import { Album } from '../../data/album/album.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildrenEntitiesService {
  public readonly childrenEntities1$: Observable<Album> = this.albumCollection.selectors$.entities$.pipe(
    map(entities => entities[0]),
    relationships(
      this.store,
      rootEntity(
        this.albumCollection,
        childrenEntities(this.songCollection, 'albumTitle', 'songs')
      )
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly albumCollection: AlbumCollection,
    protected readonly songCollection: SongCollection

  ) { }
}
