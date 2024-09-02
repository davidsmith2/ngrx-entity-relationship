import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EntityDataModule} from '@ngrx/data';
import {Store} from '@ngrx/store';
import {reduceFlat, reduceGraph, rootEntity} from 'ngrx-entity-relationship';

import {FightCollection} from './collections/fight.collection';
import {HeroCollection} from './collections/hero.collection';
import {entityConfig} from './config';

@NgModule({
    imports: [CommonModule, EntityDataModule.forRoot(entityConfig)],
    providers: [FightCollection, HeroCollection]
})
export class DataModule {
    constructor(hero: HeroCollection, fight: FightCollection, store: Store) {
        hero.addManyToCache([]);
        // villain.addManyToCache([]);
        fight.addManyToCache([]);

        store.dispatch(
            reduceGraph({
                data: [
                    {
                        uuid: 'hero1',
                        heroName: 'Hero 1',
                    },
                    {
                        uuid: 'hero2',
                        heroName: 'Hero 2',
                    },
                ],
                selector: rootEntity(hero),
            }),
        );
        /*
        store.dispatch(
            reduceGraph({
                data: [
                    {
                        uuid: 'villain3',
                        villainName: 'Villain 3',
                    },
                    {
                        uuid: 'villain4',
                        villainName: 'Villain 4',
                    },
                ],
                selector: rootEntity(villain),
            }),
        );
        */
        store.dispatch(
            reduceFlat({
                data: {
                    fights: [
                        {
                            id: '1',
                            heroId: 'hero1',
                            villainId: 'villain4',
                        },
                        {
                            id: '2',
                            heroId: 'hero2',
                            villainId: 'villain3',
                        },
                        {
                            id: '3',
                            heroId: 'hero2',
                            villainId: 'villain4',
                        },
                    ],
                },
                selector: rootEntity(fight, {
                    flatKey: 'fights',
                }),
            }),
        );
    }
}
