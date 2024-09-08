import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../data/artist/artist.interface';
import { Store } from '@ngrx/store';
import { ArtistCollection } from '../../data/artist/artist.collection';
import { map } from 'rxjs/operators'
import { relationships, rootEntitySelector } from 'ngrx-entity-relationship';

@Injectable({
  providedIn: 'root'
})
export class RootEntitySelectorService {
  public readonly rootEntitySelector1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
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
}
