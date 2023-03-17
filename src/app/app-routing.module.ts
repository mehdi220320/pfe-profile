import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {HeaderProfileComponent} from "./header-profile/header-profile.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path:'userprofile', component:HeaderProfileComponent},
  {path:'myprofile', component:MyProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
