import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEntityComponent } from './child-entity.component';
import { ChildEntityResolver } from './child-entity.resolver';
import { ChildEntityService } from './child-entity.service';

@NgModule({
  declarations: [
    ChildEntityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildEntityComponent
  ],
  providers: [
    ChildEntityResolver,
    ChildEntityService
  ]
})
export class ChildEntityModule { }
