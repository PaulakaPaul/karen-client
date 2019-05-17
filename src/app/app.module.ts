import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { MapComponent } from './map/map/map.component';
import { LivestreamComponent } from './livestream/livestream/livestream.component';
import { SubmissionsComponent } from './submissions/submissions/submissions.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'Bearer'
      }
    }),
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'map'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
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
