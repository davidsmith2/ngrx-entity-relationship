import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import { DataModule } from './data/data.module';
import { ngrxEntityRelationshipReducer } from 'ngrx-entity-relationship';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({}, {metaReducers: [ngrxEntityRelationshipReducer]}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            name: 'ngrx-entity-relationship demo',
            maxAge: 25,
            logOnly: environment.production
        }),
        DataModule,
        RouterModule.forRoot([
            {
                path: 'core',
                loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
            }
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
