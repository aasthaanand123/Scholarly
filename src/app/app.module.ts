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
