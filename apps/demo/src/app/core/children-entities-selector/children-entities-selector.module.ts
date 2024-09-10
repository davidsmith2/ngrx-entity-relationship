import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenEntitiesSelectorComponent } from './children-entities-selector.component';
import { RouterModule } from '@angular/router';
import { ChildrenEntitiesSelectorService } from './children-entities-selector.service';

@NgModule({
  declarations: [
    ChildrenEntitiesSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildrenEntitiesSelectorComponent
      }
    ])
  ],
  exports: [
    ChildrenEntitiesSelectorComponent
  ],
  providers: [ChildrenEntitiesSelectorService]
})
export class ChildrenEntitiesSelectorModule {
  constructor(private childrenEntitiesSelectorService: ChildrenEntitiesSelectorService) {
    this.childrenEntitiesSelectorService.hydrateCache();
  }
}
