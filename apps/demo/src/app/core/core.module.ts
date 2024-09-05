import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { RootEntityComponent } from './root-entity/root-entity.component';
import { RootEntitiesComponent } from './root-entities/root-entities.component';
import { RelatedEntityComponent } from './related-entity/related-entity.component';
import { RootEntityResolver } from './root-entity/root-entity.resolver';
import { RootEntitiesResolver } from './root-entities/root-entities.resolver';
import { RelatedEntityResolver } from './related-entity/related-entity.resolver';
import { RootEntityModule } from './root-entity/root-entity.module';
import { RootEntitiesModule } from './root-entities/root-entities.module';
import { RelatedEntityModule } from './related-entity/related-entity.module';
import { ChildEntityComponent } from './child-entity/child-entity.component';
import { ChildEntityResolver } from './child-entity/child-entity.resolver';

@NgModule({
  declarations: [
    CoreComponent
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
            component: RootEntityComponent,
            resolve: {
              data: RootEntityResolver
            }
          },
          {
            path: 'root-entities',
            component: RootEntitiesComponent,
            resolve: {
              data: RootEntitiesResolver
            }
          },
          {
            path: 'related-entity',
            component: RelatedEntityComponent,
            resolve: {
              data: RelatedEntityResolver
            }
          },
          {
            path: 'child-entity',
            component: ChildEntityComponent,
            resolve: {
              data: ChildEntityResolver
            }
          }
        ]
      }
    ]),
    RootEntityModule,
    RootEntitiesModule,
    RelatedEntityModule
  ],
  exports: [
    CoreComponent
  ],
  providers: [ ]
})
export class CoreModule { }
