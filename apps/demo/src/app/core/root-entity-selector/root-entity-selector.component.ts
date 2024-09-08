import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../../data/artist/artist.interface';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { relationships, rootEntitySelector } from 'ngrx-entity-relationship';

@Component({
  templateUrl: './root-entity-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntitySelectorComponent implements OnInit {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map((entities: Array<Artist>) => entities[0]),
    relationships(
      this.store,
      rootEntitySelector(this.artistCollection)()
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection
  ) { }

  ngOnInit(): void {
  }

}
