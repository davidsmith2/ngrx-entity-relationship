import { Injectable } from "@angular/core";
import { relationships, rootEntities, rootEntity } from "ngrx-entity-relationship";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Artist } from "../../data/artist/artist.interface";
import { ArtistCollection } from "../../data/artist/artist.collection";

@Injectable()
export class RootEntitiesService {
  public readonly rootEntities1$: Observable<Array<Artist>> = this.artistCollection.selectors$.entities$.pipe(
    relationships(
      this.store,
      rootEntities(rootEntity(this.artistCollection))
    )
  );

  constructor(
    protected readonly store: Store<unknown>,
    protected readonly artistCollection: ArtistCollection
  ) { }
}