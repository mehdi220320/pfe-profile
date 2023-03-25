import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {HeaderProfileComponent} from "./header-profile/header-profile.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {ArtistsignupComponent} from "./artistsignup/artistsignup.component";
import {SliderBarComponent} from "./slider-bar/slider-bar.component";
import {SliderBar2Component} from "./slider-bar2/slider-bar2.component";

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path:'userprofile', component:HeaderProfileComponent},
  {path:'myprofile', component:MyProfileComponent},
  {path:'signupartist', component:ArtistsignupComponent},
  {path:'sliderbar', component:SliderBarComponent},
  {path:'sliderbar2', component:SliderBar2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
