import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferenceViewComponent } from './conference-view/conference-view.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ConferenceService} from './services/conference.service';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import  {FormsModule} from '@angular/forms';
import { HomeConferenceComponent } from './home-conference/home-conference.component';
import { ShowDetailConferenceComponent } from './show-detail-conference/show-detail-conference.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ConferenceViewComponent,
    AddConferenceComponent,
    HomeConferenceComponent,
    ShowDetailConferenceComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
