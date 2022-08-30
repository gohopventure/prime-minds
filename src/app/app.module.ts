import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

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
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
