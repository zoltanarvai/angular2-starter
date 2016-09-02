import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { AppFrameComponent } from './app-frame';
import { HomeComponent } from './home';
import { LoginComponent, LogoutComponent } from './login';
import { IssuesComponent, Issues2Component } from './issues';
import { PagerComponent } from './controls/pager.control';

import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuard } from './shared/auth.guard';

import { SyncFusionGridComponent } from './controls/syncfusion.grid.control';
import { PageNotFoundComponent } from './controls/pagenotfound.control';
import { DynamicFormComponent } from './dynamic-form';

// Application wide providers
const APP_PROVIDERS = [
  AuthenticationService,
  AuthGuard
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AppFrameComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    IssuesComponent,
    Issues2Component,
    SyncFusionGridComponent,
    PagerComponent,
    PageNotFoundComponent,
    DynamicFormComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule { }
