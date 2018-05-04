import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { UserService } from './login/Services/UserService';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '**', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true}
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
