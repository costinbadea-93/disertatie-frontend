import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StorageServiceModule} from 'angular-webstorage-service';
import {FormsModule} from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';


import {AppComponent} from './app.component';
import {LengthPipe} from './home/Pipes/LengthPipe';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserService} from './login/Services/UserService';
import {HomeService} from './home/Services/HomeService';
import {EventDetailsService} from './event-details/Services/EventDetailsService';
import {GlobalServiceRequests} from './GlobalUtils/GlobalServices/GlobalServiceRequests';
import {HomeComponent} from './home/home.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import { GoogleMapsComponent } from './Google Services/google-maps/google-maps.component';
import {AgmCoreModule} from '@agm/core';
import { GlobalHeaderComponent } from './GlobalUtils/GlobalComponents/global-header/global-header.component';
import { ErrorComponentComponent } from './GlobalUtils/GlobalComponents/error-component/error-component.component';
import { AdminDashboardComponent } from './AadminEventsModule/admin-dashboard/admin-dashboard.component';
import { AddEventsModalComponent } from './AadminEventsModule/add-events-modal/add-events-modal.component';
import { AddEventsLocationModalComponent } from './AadminEventsModule/add-events-location-modal/add-events-location-modal.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import {AdminDashboardService} from './AadminEventsModule/admin-dashboard/Services/AdminDashboardService';
import { GlobalFooterComponent } from './GlobalUtils/GlobalComponents/global-footer/global-footer.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponentComponent } from './GlobalUtils/GlobalComponents/review-component/review-component.component';
import { ReservationsComponent } from './best-rated-events/reservations.component';
import {ReservationsService} from './best-rated-events/Services/ReservationsService';
import { TopRatedEventsComponent } from './top-rated-events/top-rated-events.component';
import {TopRatedEventsService} from './top-rated-events/Services/TopRatedEventsService';
import { ContactUsComponentComponent } from './contact-us-component/contact-us-component.component';
import {AuthGuardService} from './GlobalUtils/GlobalServices/RoutingGuard';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'contactUs', component: ContactUsComponentComponent, canActivate: [AuthGuardService]},
  {path: 'eventDetails/:id', component: EventDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuardService]},
  {path: 'yourReservations', component: ReservationsComponent, canActivate: [AuthGuardService]},
  {path: '**', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LengthPipe,
    EventDetailsComponent,
    GoogleMapsComponent,
    GlobalHeaderComponent,
    ErrorComponentComponent,
    AdminDashboardComponent,
    AddEventsModalComponent,
    AddEventsLocationModalComponent,
    GlobalFooterComponent,
    RegisterComponent,
    ReviewComponentComponent,
    ReservationsComponent,
    TopRatedEventsComponent,
    ContactUsComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    NgDatepickerModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9L-cEPyXEmM9vsEUKahex9N_9QYe4o_k'
    }),
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true,
        useHash: true
      })
  ],
  exports: [],
  providers: [UserService,
    HomeService,
    EventDetailsService,
    GlobalServiceRequests,
    AdminDashboardService,
    ReservationsService,
    TopRatedEventsService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
