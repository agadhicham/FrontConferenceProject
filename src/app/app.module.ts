import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ConferenceService} from './services/conference.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { ConferenceViewComponent } from './components/conference-view/conference-view.component';
import { HomeConferenceComponent } from './components/home-conference/home-conference.component';
import { ShowDetailConferenceComponent } from './components/show-detail-conference/show-detail-conference.component';
import { AddConferenceComponent } from './components/add-conference/add-conference.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    ConferenceViewComponent,
    AddConferenceComponent,
    HomeConferenceComponent,
    ShowDetailConferenceComponent,
    ArticleComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,




  ],
  providers: [ConferenceService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
