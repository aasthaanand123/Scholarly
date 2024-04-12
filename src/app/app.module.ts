import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { ScholarshipsDisplayComponent } from './scholarships-display/scholarships-display.component';
import { ScholarshipCardComponent } from './scholarships-display/scholarship-card/scholarship-card.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { FilterBoxComponent } from './scholarships/filter-box/filter-box.component';
import { ScholarshipDetailCardComponent } from './scholarships/scholarship-detail-card/scholarship-detail-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbarCustomComponent } from './navbar-custom/navbar-custom.component';
import { LeftOptionsComponent } from './user-dashboard/left-options/left-options.component';
import { StatusCardComponent } from './user-dashboard/status-card/status-card.component';
import { AppliedScholarshipListComponent } from './user-dashboard/applied-scholarship-list/applied-scholarship-list.component';
import { ProfileCardComponent } from './user-dashboard/profile-card/profile-card.component';
import { NotificationCardComponent } from './user-dashboard/notification-card/notification-card.component';
import { IndividualNotificationComponent } from './user-dashboard/notification-card/individual-notification/individual-notification.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingMainComponent,
    ScholarshipsDisplayComponent,
    ScholarshipCardComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ScholarshipsComponent,
    FilterBoxComponent,
    ScholarshipDetailCardComponent,
    UserDashboardComponent,
    NavbarCustomComponent,
    LeftOptionsComponent,
    StatusCardComponent,
    AppliedScholarshipListComponent,
    ProfileCardComponent,
    NotificationCardComponent,
    IndividualNotificationComponent,
    UpdateProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
