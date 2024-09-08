import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatedEntityComponent } from "./related-entity.component";
import { RouterModule } from "@angular/router";
import { RelatedEntityService } from "./related-entity.service";

@NgModule({
    declarations: [RelatedEntityComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: RelatedEntityComponent
        }
      ])
    ],
    exports: [RelatedEntityComponent],
    providers: [RelatedEntityService]
})
export class RelatedEntityModule {
    constructor(
        private relatedEntityService: RelatedEntityService
    ) {
      this.relatedEntityService.hydrateCache();
    }

}