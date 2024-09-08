import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEntitySelectorComponent } from './child-entity-selector.component';
import { RouterModule } from '@angular/router';
import { ChildEntitySelectorService } from './child-entity-selector.service';

@NgModule({
  declarations: [
    ChildEntitySelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildEntitySelectorComponent
      }
    ])
  ],
  exports: [
    ChildEntitySelectorComponent
  ],
  providers: [ChildEntitySelectorService]
})
export class ChildEntitySelectorModule {
  constructor(private childEntitySelectorService: ChildEntitySelectorService) {
    this.childEntitySelectorService.hydrateCache();
  }
}
