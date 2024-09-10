import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEntityComponent } from './child-entity.component';
import { RouterModule } from '@angular/router';
import { ChildEntityService } from './child-entity.service';

@NgModule({
  declarations: [
    ChildEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildEntityComponent
      }
    ])
  ],
  exports: [
    ChildEntityComponent
  ],
  providers: [ChildEntityService]
})
export class ChildEntityModule {
  constructor(private childEntityService: ChildEntityService) {
    this.childEntityService.hydrateCache();
  }
}
