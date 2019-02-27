import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConferenceService } from './services/conference.service';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FileSelectDirective } from 'ng2-file-upload';

import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { ConferenceViewComponent } from './components/conference-view/conference-view.component';
import { HomeConferenceComponent } from './components/home-conference/home-conference.component';
import { ShowDetailConferenceComponent } from './components/show-detail-conference/show-detail-conference.component';
import { AddConferenceComponent } from './components/add-conference/add-conference.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DomaineComponent } from './components/domaine/domaine.component';
import { ListArtclesComponent } from './components/list-artcles/list-artcles.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { EditAricleComponent } from './components/edit-aricle/edit-aricle.component';




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
    FileSelectDirective,
    DomaineComponent,
    ListArtclesComponent,
    ShowArticleComponent,
    EditAricleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [ConferenceService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
