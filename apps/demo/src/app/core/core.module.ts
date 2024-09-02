import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { RootEntityComponent } from './root-entity/root-entity.component';
import { RootEntityService } from './root-entity/root-entity.service';

@NgModule({
  declarations: [
    CoreComponent,
    RootEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CoreComponent,
        children: [
          {
            path: 'root-entity',
            component: RootEntityComponent
          }
        ]
      }
    ])
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    RootEntityService
  ]
})
export class CoreModule { }
