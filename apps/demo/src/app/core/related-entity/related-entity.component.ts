import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../../data/artist/artist.interface';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { AlbumCollection } from '../../data/album/album.collection';
import { relatedEntity, relationships, rootEntity } from 'ngrx-entity-relationship';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './related-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedEntityComponent implements OnInit {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map(entities => entities[0]),
    relationships(
      this.store,
      rootEntity(
        this.artistCollection,
        relatedEntity(this.albumCollection, 'albumTitle', 'album')
      )
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection,
    protected readonly albumCollection: AlbumCollection
  ) { }

  ngOnInit(): void { }

}
