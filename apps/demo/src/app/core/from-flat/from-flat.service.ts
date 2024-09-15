import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { AlbumCollection } from "../../data/album/album.collection";
import { reduceFlat, relatedEntity, relationships, rootEntity } from "ngrx-entity-relationship";
import { map, Observable } from "rxjs";
import { Artist } from "../../data/artist/artist.interface";

@Injectable()
export class FromFlatService {
  example1$: Observable<Artist> = this.artistCollection.selectors$.entities$.pipe(
    map(entities => entities[0]),
    relationships(
      this.store,
      this.createRootEntitySelector()
    )
  );

  constructor(
    private store: Store,
    private artistCollection: ArtistCollection,
    private albumCollection: AlbumCollection
  ) { }

  hydrateCache() {
    this.artistCollection.addManyToCache([]);
    this.albumCollection.addManyToCache([]);
    this.store.dispatch(
      reduceFlat({
        data: {
          artists: [
            {
              name: 'artist1',
              albumTitle: 'album1'
            }
          ],
          albums: [
            {
              title: 'album1'
            }
          ]
        },
        selector: this.createRootEntitySelector(),
      }),
    );
  }

  createRootEntitySelector() {
    return rootEntity(
      this.artistCollection,
      {flatKey: 'artists'},
      relatedEntity(
        this.albumCollection,
        'albumTitle',
        'album',
        {flatKey: 'albums'}
      )
    );
  }
}