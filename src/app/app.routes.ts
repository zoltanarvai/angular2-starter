import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { IssuesComponent, Issues2Component } from './issues';
import { LoginComponent } from './login';
import { AppFrameComponent } from './app-frame';
import { AuthGuard } from './shared/auth.guard';
import { PageNotFoundComponent } from './controls/pagenotfound.control';
import { DynamicFormComponent } from './dynamic-form';

export const ROUTES: Routes = [
  { 
    path: 'app',
    component: AppFrameComponent,
    canActivate: [AuthGuard], 
    children: [
        { 
          path: 'home',  
          component: HomeComponent
        },
        { 
          path: 'issues',  
          component: IssuesComponent
        },
        { 
          path: 'issues2',  
          component: Issues2Component
        },
        {
          path: 'dynamic-form',
          component: DynamicFormComponent
        },
        { path: '', component: HomeComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '', redirectTo: '/app/home', pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
