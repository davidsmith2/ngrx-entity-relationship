import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RootEntitiesComponent } from "./root-entities.component";
import { RouterModule } from "@angular/router";
import { RootEntitiesService } from "./root-entities.service";

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
  exports: [RootEntitiesComponent],
  providers: [RootEntitiesService]
})
export class RootEntitiesModule {
  constructor(private rootEntitiesService: RootEntitiesService) {
    this.rootEntitiesService.hydrateCache();
  }
}