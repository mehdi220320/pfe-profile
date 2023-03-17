import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { GalerieProfileComponent } from './galerie-profile/galerie-profile.component';
import { AproposProfileComponent } from './apropos-profile/apropos-profile.component';
import { PostProfileComponent } from './post-profile/post-profile.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    HeaderProfileComponent,
    GalerieProfileComponent,
    AproposProfileComponent,
    PostProfileComponent,
    CreatePostComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
