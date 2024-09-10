import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { DataModule } from './data/data.module';
import { ngrxEntityRelationshipReducer } from 'ngrx-entity-relationship';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({}, {metaReducers: [ngrxEntityRelationshipReducer]}),
        EffectsModule.forRoot([]),
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
