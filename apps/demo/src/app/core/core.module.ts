import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { RootEntityComponent } from './root-entity/root-entity.component';
import { RootEntitiesComponent } from './root-entities/root-entities.component';
import { RelatedEntityComponent } from './related-entity/related-entity.component';
import { RootEntityModule } from './root-entity/root-entity.module';
import { RootEntitiesModule } from './root-entities/root-entities.module';
import { RelatedEntityModule } from './related-entity/related-entity.module';
import { ChildEntityComponent } from './child-entity/child-entity.component';
import { ChildrenEntitiesComponent } from './children-entities/children-entities.component';
import { ChildEntityModule } from './child-entity/child-entity.module';
import { ChildrenEntitiesModule } from './children-entities/children-entities.module';
import { RootEntitySelectorModule } from './root-entity-selector/root-entity-selector.module';
import { RootEntitySelectorComponent } from './root-entity-selector/root-entity-selector.component';
import { RelatedEntitySelectorComponent } from './related-entity-selector/related-entity-selector.component';
import { RelatedEntitySelectorModule } from './related-entity-selector/related-entity-selector.module';
import { ChildEntitySelectorComponent } from './child-entity-selector/child-entity-selector.component';
import { ChildEntitySelectorModule } from './child-entity-selector/child-entity-selector.module';
import { ChildrenEntitiesSelectorComponent } from './children-entities-selector/children-entities-selector.component';
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
            component: RootEntityComponent
          },
          {
            path: 'root-entity-selector',
            component: RootEntitySelectorComponent
          },
          {
            path: 'root-entities',
            component: RootEntitiesComponent
          },
          {
            path: 'related-entity',
            component: RelatedEntityComponent
          },
          {
            path: 'related-entity-selector',
            component: RelatedEntitySelectorComponent
          },
          {
            path: 'child-entity',
            component: ChildEntityComponent
          },
          {
            path: 'child-entity-selector',
            component: ChildEntitySelectorComponent
          },
          {
            path: 'children-entities',
            component: ChildrenEntitiesComponent
          },
          {
            path: 'children-entities-selector',
            component: ChildrenEntitiesSelectorComponent
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
