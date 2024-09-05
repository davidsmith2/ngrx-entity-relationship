import { Injectable } from "@angular/core";
import { relatedEntity, relationships, rootEntity } from "ngrx-entity-relationship";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Artist } from "../../data/artist/artist.interface";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { AlbumCollection } from "../../data/album/album.collection";

@Injectable()
export class RelatedEntityService {
  public readonly relatedEntity1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
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
}