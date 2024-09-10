import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootEntitySelectorComponent } from './root-entity-selector.component';
import { RouterModule } from '@angular/router';
import { RootEntitySelectorService } from './root-entity-selector.service';

@NgModule({
  declarations: [
    RootEntitySelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootEntitySelectorComponent
      }
    ])
  ],
  exports: [
    RootEntitySelectorComponent
  ],
  providers: [
    RootEntitySelectorService
  ]
})
export class RootEntitySelectorModule {
  constructor(private rootEntitySelectorService: RootEntitySelectorService) {
    this.rootEntitySelectorService.hydrateCache();
  }
}
