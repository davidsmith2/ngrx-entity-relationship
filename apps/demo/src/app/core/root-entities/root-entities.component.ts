import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../data/artist/artist.interface';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { relationships, rootEntities, rootEntity } from 'ngrx-entity-relationship';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entities.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntitiesComponent implements OnInit {
example1$: Observable<Array<Artist>> = this.artistCollection.selectors$.entities$.pipe(
  relationships(
    this.store,
    rootEntities(rootEntity(this.artistCollection))
  )
);

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection

  ) { }

  ngOnInit(): void { }

}
