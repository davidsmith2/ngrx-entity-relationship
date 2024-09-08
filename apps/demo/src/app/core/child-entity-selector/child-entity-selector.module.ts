import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEntitySelectorComponent } from './child-entity-selector.component';
import { ChildEntitySelectorResolver } from './child-entity-selector.resolver';
import { ChildEntitySelectorService } from './child-entity-selector.service';



@NgModule({
  declarations: [
    ChildEntitySelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildEntitySelectorComponent
  ],
  providers: [
    ChildEntitySelectorResolver,
    ChildEntitySelectorService
  ]
})
export class ChildEntitySelectorModule { }
