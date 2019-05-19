import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { LoginModule } from './login/login.module';
import { NotFoundModule } from './not-found/not-found.module';
import { RegisterModule } from './register/register.module';
import { ShellComponent } from './shell/shell/shell.component';
import { ShellModule } from './shell/shell.module';
import { AuthGuard } from './services/auth.guard';
import { MapComponent } from './shell/map/map/map.component';
import { LivestreamComponent } from './shell/livestream/livestream/livestream.component';
import { AdminGuard } from './services/admin.guard';
import { SubmissionsComponent } from './shell/submissions/submissions/submissions.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShellModule,
    LoginModule,
    NotFoundModule,
    RegisterModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'Bearer ',
        whitelistedDomains: ['192.168.6.100:8080', '192.168.6.167:8080', '0.0.0.0:8081']
      }
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      {
        path: '', component: ShellComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'map'
          },
          {
            path: 'map',
            component: MapComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'livestream',
            component: LivestreamComponent,
            canActivate: [AdminGuard]
          },
          {
            path: 'submissions',
            component: SubmissionsComponent,
            canActivate: [AdminGuard]
          }
        ]
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
