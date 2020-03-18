import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TodoEffect } from './effects/todo.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { metaReducers, reducers } from './reducers'

@NgModule({
    declarations: [
        AppComponent,
        TodoOverviewComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([TodoEffect]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            // logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
