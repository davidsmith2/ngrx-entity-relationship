import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedEntitySelectorComponent } from './related-entity-selector.component';
import { RelatedEntitySelectorResolver } from './related-entity-selector.resolver';
import { RelatedEntitySelectorService } from './related-entity-selector.service';



@NgModule({
  declarations: [
    RelatedEntitySelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RelatedEntitySelectorComponent
  ],
  providers: [
    RelatedEntitySelectorResolver,
    RelatedEntitySelectorService
  ]
})
export class RelatedEntitySelectorModule { }
