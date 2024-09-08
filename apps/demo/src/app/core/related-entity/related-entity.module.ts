import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatedEntityComponent } from "./related-entity.component";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { AlbumCollection } from "../../data/album/album.collection";
import { reduceGraph, relatedEntity, rootEntity } from "ngrx-entity-relationship";

@NgModule({
    declarations: [RelatedEntityComponent],
    imports: [CommonModule],
    exports: [RelatedEntityComponent]
})
export class RelatedEntityModule {
    constructor(
        private store: Store,
        private artistCollection: ArtistCollection,
        private albumCollection: AlbumCollection
    ) {
        this.artistCollection.addManyToCache([]);
        this.albumCollection.addManyToCache([]);
        this.store.dispatch(
          reduceGraph({
            data: [
              {
                name: 'artist1',
                albumTitle: 'album1',
                album: {
                  title: 'album1',
                }
              }
            ],
            selector: rootEntity(
                this.artistCollection,
                relatedEntity(this.albumCollection, 'albumTitle', 'album')
            )
          }),
        );
    }

}