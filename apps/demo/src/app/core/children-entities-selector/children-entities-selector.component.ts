import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../../data/album/album.interface';
import { Store } from '@ngrx/store';
import { AlbumCollection } from '../../data/album/album.collection';
import { SongCollection } from '../../data/song/song.collection';
import { childrenEntitiesSelector, relationships, rootEntitySelector } from 'ngrx-entity-relationship';

@Component({
  templateUrl: './children-entities-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenEntitiesSelectorComponent implements OnInit {
  example1$: Observable<Album> = this.albumCollection.selectors$.entities$.pipe(
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

  ngOnInit(): void {
  }

}
