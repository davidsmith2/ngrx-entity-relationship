import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RxjsComponent,
        children: [
          {
            path: '',
            redirectTo: 'relationships',
            pathMatch: 'full'
          },
          {
            path: 'relationships',
            loadChildren: () => import('./relationships/relationships.module').then(m => m.RelationshipsModule)
          }
        ]
      }
    ])
  ],
  exports: [
    RxjsComponent
  ]
})
export class RxjsModule { }
