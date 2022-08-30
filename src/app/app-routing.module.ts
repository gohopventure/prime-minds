import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { component: HomePageComponent, path: 'home' },
  { component: AboutPageComponent, path: 'about' },
  { component: ContactPageComponent, path: 'contact' },
  { component: ServicesPageComponent, path: 'services' },
  { component: FaqPageComponent, path: 'faq' },
  { component: BlogPageComponent, path: 'blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
