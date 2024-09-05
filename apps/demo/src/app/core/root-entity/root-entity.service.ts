import { Injectable } from "@angular/core";
import { relationships, rootEntity } from "ngrx-entity-relationship";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { Artist } from "../../data/artist/artist.interface";
import { ArtistCollection } from "../../data/artist/artist.collection";

@Injectable()
export class RootEntityService {
  public readonly rootEntity1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
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
}