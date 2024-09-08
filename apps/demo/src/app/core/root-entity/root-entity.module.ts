import { NgModule } from "@angular/core";
import { RootEntityComponent } from "./root-entity.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RootEntityService } from "./root-entity.service";

@NgModule({
    declarations: [RootEntityComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: RootEntityComponent
        }
      ])
    ],
    exports: [RootEntityComponent],
    providers: [RootEntityService]
})
export class RootEntityModule {
    constructor(private rootEntityService: RootEntityService) {
      this.rootEntityService.hydrateCache();
    }

}