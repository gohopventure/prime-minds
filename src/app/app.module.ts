import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OpHoursCardComponent } from './components/op-hours-card/op-hours-card.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { CopyrightBannerComponent } from './components/copyright-banner/copyright-banner.component';
import { SocialBannerComponent } from './components/social-banner/social-banner.component';
import { ConstructionPageComponent } from './components/construction-page/construction-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    FaqPageComponent,
    BlogPageComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    AddressCardComponent,
    OpHoursCardComponent,
    SocialCardComponent,
    CopyrightBannerComponent,
    SocialBannerComponent,
    ConstructionPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
