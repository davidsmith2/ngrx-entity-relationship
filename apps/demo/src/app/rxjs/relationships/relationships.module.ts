import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipsComponent } from './relationships.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RelationshipsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RelationshipsComponent
      }
    ])
  ],
  exports: [
    RelationshipsComponent
  ]
})
export class RelationshipsModule { }
