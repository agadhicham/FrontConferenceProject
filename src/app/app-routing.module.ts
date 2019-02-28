import { EditConferenceComponent } from './components/conference-admin/edit-conference/edit-conference.component';
import { AdministrationOfConferencesComponent } from './components/conference-admin/administration-of-conferences/administration-of-conferences.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConferenceViewComponent } from './components/conference-view/conference-view.component';
import { AddConferenceComponent } from './components/conference-admin/add-conference/add-conference.component';
import { HomeConferenceComponent } from './components/home-conference/home-conference.component';
import { ShowDetailConferenceComponent } from './components/show-detail-conference/show-detail-conference.component';
import { ArticleComponent } from './components/article/article.component';
import { ListArtclesComponent } from './components/list-artcles/list-artcles.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';

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
    path: 'articles', children: [
      {
        path: '', component: ListArtclesComponent
      },
      {
        path: 'create', component: ArticleComponent
      },
      {
        path: 'show/:id', component: ShowArticleComponent
      },
      {
        path: 'edit/:id', component: ArticleComponent
      }
    ]
  },
  {
    path: 'home', component: HomeConferenceComponent
  },
  {
    path: 'show/:id', component: ShowDetailConferenceComponent
  },
  {
    path: 'edit/:id', component: EditConferenceComponent
  },
  {
    path: 'articles', component:ArticleComponent
  },
  {
    path: 'admin', component:AdministrationOfConferencesComponent
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
