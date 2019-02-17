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
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';


const  route:Routes=[
  {path:'conferenceList',component:ConferenceViewComponent},
  {path:'addconference',component:AddConferenceComponent},
  {path:'home',component:HomeConferenceComponent},
  {path:'show/:id', component:ShowDetailConferenceComponent},
  {path:'',redirectTo:'/conferenceList',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ConferenceViewComponent,
    AddConferenceComponent,
    HomeConferenceComponent,
    ShowDetailConferenceComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule

  ],
  providers: [ConferenceService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
