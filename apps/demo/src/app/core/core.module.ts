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
import { ChildrenEntitiesComponent } from './children-entities/children-entities.component';
import { ChildrenEntitiesResolver } from './children-entities/children-entities.resolver';
import { ChildEntityModule } from './child-entity/child-entity.module';
import { ChildrenEntitiesModule } from './children-entities/children-entities.module';
import { RootEntitySelectorModule } from './root-entity-selector/root-entity-selector.module';
import { RootEntitySelectorComponent } from './root-entity-selector/root-entity-selector.component';
import { RootEntitySelectorResolver } from './root-entity-selector/root-entity-selector.resolver';
import { RelatedEntitySelectorComponent } from './related-entity-selector/related-entity-selector.component';
import { RelatedEntitySelectorResolver } from './related-entity-selector/related-entity-selector.resolver';
import { RelatedEntitySelectorModule } from './related-entity-selector/related-entity-selector.module';
import { ChildEntitySelectorComponent } from './child-entity-selector/child-entity-selector.component';
import { ChildEntitySelectorResolver } from './child-entity-selector/child-entity-selector.resolver';
import { ChildEntitySelectorModule } from './child-entity-selector/child-entity-selector.module';
import { ChildrenEntitiesSelectorComponent } from './children-entities-selector/children-entities-selector.component';
import { ChildrenEntitiesSelectorResolver } from './children-entities-selector/children-entities-selector.resolver';
import { ChildrenEntitiesSelectorModule } from './children-entities-selector/children-entities-selector.module';

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
            path: 'root-entity-selector',
            component: RootEntitySelectorComponent,
            resolve: {
              data: RootEntitySelectorResolver
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
            path: 'related-entity-selector',
            component: RelatedEntitySelectorComponent,
            resolve: {
              data: RelatedEntitySelectorResolver
            }
          },
          {
            path: 'child-entity',
            component: ChildEntityComponent,
            resolve: {
              data: ChildEntityResolver
            }
          },
          {
            path: 'child-entity-selector',
            component: ChildEntitySelectorComponent,
            resolve: {
              data: ChildEntitySelectorResolver
            }
          },
          {
            path: 'children-entities',
            component: ChildrenEntitiesComponent,
            resolve: {
              data: ChildrenEntitiesResolver
            }
          },
          {
            path: 'children-entities-selector',
            component: ChildrenEntitiesSelectorComponent,
            resolve: {
              data: ChildrenEntitiesSelectorResolver
            }
          }
        ]
      }
    ]),
    RootEntityModule,
    RootEntitiesModule,
    RelatedEntityModule,
    ChildEntityModule,
    ChildrenEntitiesModule,
    RootEntitySelectorModule,
    RelatedEntitySelectorModule,
    ChildEntitySelectorModule,
    ChildrenEntitiesSelectorModule
  ],
  exports: [
    CoreComponent
  ],
  providers: [ ]
})
export class CoreModule { }
