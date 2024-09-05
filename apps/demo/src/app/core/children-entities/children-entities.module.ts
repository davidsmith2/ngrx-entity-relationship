import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenEntitiesComponent } from './children-entities.component';
import { ChildrenEntitiesResolver } from './children-entities.resolver';
import { ChildrenEntitiesService } from './children-entities.service';

@NgModule({
  declarations: [
    ChildrenEntitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildrenEntitiesComponent
  ],
  providers: [
    ChildrenEntitiesResolver,
    ChildrenEntitiesService
  ]
})
export class ChildrenEntitiesModule { }
