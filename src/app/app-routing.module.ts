import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConferenceViewComponent } from './conference-view/conference-view.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { HomeConferenceComponent } from './home-conference/home-conference.component';
import { ShowDetailConferenceComponent } from './show-detail-conference/show-detail-conference.component';

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
    path: '', redirectTo: 'login', pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }