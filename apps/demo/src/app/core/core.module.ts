import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';

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
            loadChildren: () => import('./root-entity/root-entity.module').then(m => m.RootEntityModule)
          },
          {
            path: 'root-entity-selector',
            loadChildren: () => import('./root-entity-selector/root-entity-selector.module').then(m => m.RootEntitySelectorModule)
          },
          {
            path: 'root-entities',
            loadChildren: () => import('./root-entities/root-entities.module').then(m => m.RootEntitiesModule)
          },
          {
            path: 'related-entity',
            loadChildren: () => import('./related-entity/related-entity.module').then(m => m.RelatedEntityModule)
          },
          {
            path: 'related-entity-selector',
            loadChildren: () => import('./related-entity-selector/related-entity-selector.module').then(m => m.RelatedEntitySelectorModule)
          },
          {
            path: 'child-entity',
            loadChildren: () => import('./child-entity/child-entity.module').then(m => m.ChildEntityModule)
          },
          {
            path: 'child-entity-selector',
            loadChildren: () => import('./child-entity-selector/child-entity-selector.module').then(m => m.ChildEntitySelectorModule)
          },
          {
            path: 'children-entities',
            loadChildren: () => import('./children-entities/children-entities.module').then(m => m.ChildrenEntitiesModule)
          },
          {
            path: 'children-entities-selector',
            loadChildren: () => import('./children-entities-selector/children-entities-selector.module').then(m => m.ChildrenEntitiesSelectorModule)
          }
        ]
      }
    ])
  ],
  exports: [
    CoreComponent
  ],
  providers: [ ]
})
export class CoreModule { }
