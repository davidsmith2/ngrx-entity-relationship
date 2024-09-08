import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RootEntitiesComponent } from "./root-entities.component";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { reduceGraph, rootEntity } from "ngrx-entity-relationship";

@NgModule({
    declarations: [RootEntitiesComponent],
    imports: [CommonModule],
    exports: [RootEntitiesComponent]
})
export class RootEntitiesModule {
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
              },
              {
                name: 'artist2',
              },
            ],
            selector: rootEntity(this.artistCollection),
          }),
        );
    }

}