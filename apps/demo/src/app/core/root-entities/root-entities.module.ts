import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RootEntitiesComponent } from "./root-entities.component";
import { Store } from "@ngrx/store";
import { ArtistCollection } from "../../data/artist/artist.collection";
import { reduceGraph, rootEntities, rootEntity } from "ngrx-entity-relationship";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [RootEntitiesComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: RootEntitiesComponent
        }
      ])
    ],
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
            selector: rootEntities(rootEntity(this.artistCollection)),
          }),
        );
    }

}