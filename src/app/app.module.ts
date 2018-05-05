import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {LengthPipe} from './home/Pipes/LengthPipe';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from './login/Services/UserService';
import { HomeService} from './home/Services/HomeService';
import { GlobalServiceRequests } from './GlobalServices/GlobalServiceRequests';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LengthPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true,
        useHash: true
      })
  ],
  exports: [],
  providers: [UserService, HomeService, GlobalServiceRequests],
  bootstrap: [AppComponent]
})
export class AppModule { }
