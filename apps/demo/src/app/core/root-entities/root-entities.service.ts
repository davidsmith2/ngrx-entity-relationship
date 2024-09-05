import { Injectable } from "@angular/core";
import { relationships, rootEntities, rootEntity } from "ngrx-entity-relationship";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Artist } from "../store/models";
import { ArtistCollection } from "../store/collections/artist.collection";

@Injectable()
export class RootEntitiesService {
  public readonly rootEntities$: Observable<Array<Artist>> = this.artistCollection.selectors$.entities$.pipe(
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