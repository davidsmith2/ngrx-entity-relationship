import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedEntitySelectorComponent } from './related-entity-selector.component';
import { RouterModule } from '@angular/router';
import { RelatedEntitySelectorService } from './related-entity-selector.service';

@NgModule({
  declarations: [
    RelatedEntitySelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RelatedEntitySelectorComponent
      }
    ])
  ],
  exports: [
    RelatedEntitySelectorComponent
  ],
  providers: [RelatedEntitySelectorService]
})
export class RelatedEntitySelectorModule {
  constructor(private relatedEntitySelectorService: RelatedEntitySelectorService) {
    this.relatedEntitySelectorService.hydrateCache();
  }
}
