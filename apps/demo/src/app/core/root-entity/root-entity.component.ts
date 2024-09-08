import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../../data/artist/artist.interface';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { relationships, rootEntity } from 'ngrx-entity-relationship';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntityComponent implements OnInit {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map((entities: Array<Artist>) => entities[0]),
    relationships(
      this.store,
      rootEntity(this.artistCollection)
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection

  ) { }

  ngOnInit(): void { }

}
