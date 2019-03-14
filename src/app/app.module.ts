import { AdministrationOfConferencesComponent } from './components/conference-admin/administration-of-conferences/administration-of-conferences.component';
import { AddConferenceComponent } from './components/conference-admin/add-conference/add-conference.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxBraintreeModule } from 'ngx-braintree';
import { ConferenceService } from './services/conference.service';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { ConferenceViewComponent } from './components/conference-view/conference-view.component';
import { HomeConferenceComponent } from './components/home-conference/home-conference.component';
import { ShowDetailConferenceComponent } from './components/show-detail-conference/show-detail-conference.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DomaineComponent } from './components/domaine/domaine.component';
import { ListArtclesComponent } from './components/list-artcles/list-artcles.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { EditAricleComponent } from './components/edit-aricle/edit-aricle.component';
import { EditConferenceComponent } from './components/conference-admin/edit-conference/edit-conference.component';
import { PresentationComponent } from './components/presentationComponent/presentation/presentation.component';
import { ShowPresentationComponent } from './components/presentationComponent/show-presentation/show-presentation.component';
import { EditPresentationComponent } from './components/presentationComponent/edit-presentation/edit-presentation.component';
import { ListPresentationComponent } from './components/presentationComponent/list-presentation/list-presentation.component';
import { ChairComponent } from './components/chairComponent/chair/chair.component';
import { ListChairComponent } from './components/chairComponent/list-chair/list-chair.component';
import { ShowChairComponent } from './components/chairComponent/show-chair/show-chair.component';
import { AffectationComponent } from './components/affectationComponent/affectation/affectation.component';
import { ListAffectationsComponent } from './components/affectationComponent/list-affectations/list-affectations.component';
import { ShowAffectationComponent } from './components/affectationComponent/show-affectation/show-affectation.component';
import { AddChairComponent } from './components/chairComponent/add-chair/add-chair.component';
import { SelectOptionToAdministrationComponent } from './components/select-option-to-administration/select-option-to-administration.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';




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
    EditAricleComponent,
    AdministrationOfConferencesComponent,
    EditConferenceComponent,
    PresentationComponent,
    ShowPresentationComponent,
    EditPresentationComponent,
    ListPresentationComponent,
    ChairComponent,
    ListChairComponent,
    ShowChairComponent,
    AffectationComponent,
    ListAffectationsComponent,
    ShowAffectationComponent,
    AddChairComponent,
    SelectOptionToAdministrationComponent,
    NavBarComponent,
    FooterComponent,
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
    NgxBraintreeModule,
    NgbModule
  ],
  providers: [ConferenceService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
