import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenEntitiesComponent } from './children-entities.component';
import { RouterModule } from '@angular/router';
import { ChildrenEntitiesService } from './children-entities.service';

@NgModule({
  declarations: [
    ChildrenEntitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildrenEntitiesComponent
      }
    ])
  ],
  exports: [
    ChildrenEntitiesComponent
  ],
  providers: [ChildrenEntitiesService]
})
export class ChildrenEntitiesModule {
  constructor(private childrenEntitiesService: ChildrenEntitiesService) {
    this.childrenEntitiesService.hydrateCache();
  }
}
