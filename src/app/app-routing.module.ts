import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConferenceViewComponent } from './components/conference-view/conference-view.component';
import { AddConferenceComponent } from './components/add-conference/add-conference.component';
import { HomeConferenceComponent } from './components/home-conference/home-conference.component';
import { ShowDetailConferenceComponent } from './components/show-detail-conference/show-detail-conference.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'conferenceList', component: ConferenceViewComponent
  },
  {
    path: 'addconference', component: AddConferenceComponent
  },
  {
    path: 'home', component: HomeConferenceComponent
  },
  {
    path: 'show/:id', component: ShowDetailConferenceComponent
  },

  {
    path: 'articles', component:ArticleComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
