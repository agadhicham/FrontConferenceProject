import { AddDomaineComponent } from './components/domaine/add-domaine/add-domaine.component';
import { AddReviewerComponent } from './components/reviwer/add-reviewer/add-reviewer.component';
import { AddJuryComponent } from './components/jury/add-jury/add-jury.component';
import { ListChairComponent } from './components/chairComponent/list-chair/list-chair.component';
import { AddChairComponent } from './components/chairComponent/add-chair/add-chair.component';
import { SelectOptionToAdministrationComponent } from './components/select-option-to-administration/select-option-to-administration.component';
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
import { ListPresentationComponent } from './components/presentationComponent/list-presentation/list-presentation.component';
import { PresentationComponent } from './components/presentationComponent/presentation/presentation.component';
import { ShowPresentationComponent } from './components/presentationComponent/show-presentation/show-presentation.component';
import { AffectationComponent } from './components/affectationComponent/affectation/affectation.component';
import { ShowAffectationComponent } from './components/affectationComponent/show-affectation/show-affectation.component';
import { ListAffectationsComponent } from './components/affectationComponent/list-affectations/list-affectations.component';
import { EditPresentationComponent } from './components/presentationComponent/edit-presentation/edit-presentation.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'addJury', component: AddJuryComponent
  },
  {
    path: 'addDomaine', component: AddDomaineComponent
  },
  {
    path: 'addChair', component: AddChairComponent
  },
  {
    path: 'addReviewer', component: AddReviewerComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'administration', component: SelectOptionToAdministrationComponent
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
    path: 'presentations', children: [
      {
        path: '', component: ListPresentationComponent
      },
      {
        path: 'create', component: PresentationComponent
      },
      {
        path: 'show/:id', component: ShowPresentationComponent
      },
      {
        path: 'edit/:id', component: EditPresentationComponent
      }
    ]
  },
  {
    path: 'affectations', children: [
      {
        path: '', component: ListAffectationsComponent
      },
      {
        path: 'create', component: AffectationComponent
      },
      {
        path: 'show/:id', component: ShowAffectationComponent
      },
      {
        path: 'edit/:id', component: AffectationComponent
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
    path: 'articles', component: ArticleComponent
  },
  {
    path: 'admin', component: AdministrationOfConferencesComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: "full"
  },
  {
    path: 'addChair', component: AddChairComponent
  },
  {
    path: 'chairList', component: ListChairComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
