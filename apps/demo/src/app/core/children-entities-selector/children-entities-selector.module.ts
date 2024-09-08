import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenEntitiesSelectorComponent } from './children-entities-selector.component';
import { ChildrenEntitiesSelectorResolver } from './children-entities-selector.resolver';
import { ChildrenEntitiesSelectorService } from './children-entities-selector.service';



@NgModule({
  declarations: [
    ChildrenEntitiesSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildrenEntitiesSelectorComponent
  ],
  providers: [
    ChildrenEntitiesSelectorResolver,
    ChildrenEntitiesSelectorService
  ]
})
export class ChildrenEntitiesSelectorModule { }
