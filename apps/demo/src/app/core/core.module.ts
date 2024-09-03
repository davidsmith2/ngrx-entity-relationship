import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { RootEntityComponent } from './root-entity/root-entity.component';
import { RootEntityService } from './root-entity/root-entity.service';
import { DataModule } from './store/data.module';
import { RootEntitiesComponent } from './root-entities/root-entities.component';
import { RootEntitiesService } from './root-entities/root-entities.service';
import { RelatedEntityComponent } from './related-entity/related-entity.component';
import { RelatedEntityService } from './related-entity/related-entity.service';

@NgModule({
  declarations: [
    CoreComponent,
    RootEntityComponent,
    RootEntitiesComponent,
    RelatedEntityComponent
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
          },
          {
            path: 'root-entities',
            component: RootEntitiesComponent
          },
          {
            path: 'related-entity',
            component: RelatedEntityComponent
          }
        ]
      }
    ]),
    DataModule
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    RootEntityService,
    RootEntitiesService,
    RelatedEntityService
  ]
})
export class CoreModule { }
