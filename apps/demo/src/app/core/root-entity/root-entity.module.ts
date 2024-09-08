import { NgModule } from "@angular/core";
import { RootEntityComponent } from "./root-entity.component";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { reduceGraph, rootEntity } from "ngrx-entity-relationship";

@NgModule({
    declarations: [RootEntityComponent],
    imports: [CommonModule],
    exports: [RootEntityComponent]
})
export class RootEntityModule {
    constructor(
        private store: Store,
        private artistCollection: ArtistCollection
    ) {
        this.artistCollection.addManyToCache([]);
        this.store.dispatch(
          reduceGraph({
            data: [
              {
                name: 'artist1',
              }
            ],
            selector: rootEntity(this.artistCollection),
          }),
        );
    }

}