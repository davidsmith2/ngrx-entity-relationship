import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootEntitySelectorComponent } from './root-entity-selector.component';
import { RootEntitySelectorResolver } from './root-entity-selector.resolver';
import { RootEntitySelectorService } from './root-entity-selector.service';



@NgModule({
  declarations: [
    RootEntitySelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RootEntitySelectorComponent
  ],
  providers: [
    RootEntitySelectorResolver,
    RootEntitySelectorService
  ]
})
export class RootEntitySelectorModule { }
