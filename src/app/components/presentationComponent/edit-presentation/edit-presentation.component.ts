import { Component, OnInit } from '@angular/core';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { ChairModule } from 'src/app/modules/chair/chair.module';
import { Conference } from 'src/app/modules/conference/conference';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { ActivatedRoute, Router } from '@angular/router';
import { PresentationService } from 'src/app/services/presentation.service';
import { RoleModule } from 'src/app/modules/role/role.module';
import { ArticleService } from 'src/app/services/article.service';
import { ChairService } from 'src/app/services/chair.service';
import { ConferenceService } from 'src/app/services/conference.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-edit-presentation',
  templateUrl: './edit-presentation.component.html',
  styleUrls: ['./edit-presentation.component.css']
})
export class EditPresentationComponent implements OnInit {
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  articleSelected: any
  chair = new ChairModule(0, "", "", new RoleModule(0, ""));
  chairSelected: any
  conference = new Conference();
  conferenceSelected: any
  presentation = new PresentationModule(0, this.conference, this.article, this.chair);
  articlesAccepted: Array<ArticleModule>;
  allArticlesAccepted: Array<ArticleModule>;
  conferences: Array<any>
  AllconferencesNotSelected: Array<any>
  chairs: Array<ChairModule>;
  allchairsNotSelected: Array<ChairModule>;
  updateFinish: boolean
  constructor(private activateRoute: ActivatedRoute, private presentationService: PresentationService,
    private articleService: ArticleService, private chairService: ChairService,
    private conferenceService: ConferenceService, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    if (this.accountService.typeOfCurrentUser() == "ADMIN") {
      this.activateRoute.params.subscribe(params => {
        this.presentationService.getOne(params.id).subscribe(data => {
          this.presentation = data;
          this.article = this.presentation.article
          this.conference = this.presentation.conference
          this.chair = this.presentation.chair
        }, error => console.log(error));
      });
      this.getAllArticlesAccepted();
      this.articlesAccepted = null
      this.conferences = null
      this.chairs = null
      this.chairSelected = null
      this.updateFinish = false
      // this.allArticlesAccepted=null
    }
    else {
      this.router.navigate(['/'])
    }
  }
  removeElementFromArray(array, objet) {
    array.forEach((element, indx) => {
      if (element == objet) {
        array.splice(indx, 1);
      }
    });
  }
  getAllArticlesAccepted() {
    this.articleService.getAllAccepted()
      .subscribe(data => {
        this.allArticlesAccepted = data
      }, error => console.log(error));
  }
  getAllChairs() {
    this.chairService.getAll()
      .subscribe(data => {
        this.allchairsNotSelected = data,
          console.log(data)
      }, error => console.log(error));

  }
  getAllConferences() {
    this.conferenceService.getAll()
      .subscribe(data => {
        this.AllconferencesNotSelected = data
      }, error => console.log(error));
  }
  // methode qui va permettre de selectionnée les objet qui vont etre modifier 
  ObjetToUpdate(objet) {
    if (objet != null) {
      if (this.articleSelected == null && this.articlesAccepted == null) {
        this.articleSelected = objet
        this.articlesAccepted = this.allArticlesAccepted
        // this.removeElementFromArray(this.allArticlesAccepted, this.articleSelected)
      } else if (this.AllconferencesNotSelected != null && this.conferenceSelected == null && this.allchairsNotSelected == null) {
        console.log(objet)
        this.conferenceSelected = objet
        this.conferences = this.AllconferencesNotSelected
      } else if (this.chairs == null && this.chairSelected == null && this.allchairsNotSelected != null) {
        console.log(objet)
        this.chairSelected = objet
        this.chairs = this.allchairsNotSelected
      }
    }
  }
  // methode qui va modifer les objets qu'ont ete selectionnee
  ObjetSelected(objet) {
    if (objet != null) {
      if (this.articleSelected != null && this.articlesAccepted != null) {
        this.presentation.article = objet
        this.removeElementFromArray(this.allArticlesAccepted, objet)
        this.article = objet
        this.articlesAccepted = null
        this.getAllConferences()
      }
      else if (this.conferenceSelected != null && this.conference != null && this.allchairsNotSelected == null) {
        this.presentation.conference = objet
        console.log(this.presentation.conference)
        this.removeElementFromArray(this.AllconferencesNotSelected, objet)
        this.conferenceSelected = null
        this.getAllChairs()
      }
      else if (this.chairSelected != null && this.chair != null) {
        this.presentation.chair = objet
        this.chair = objet
        console.log(this.presentation.chair)
        this.removeElementFromArray(this.allchairsNotSelected, objet)
        this.presentationService.edit(this.presentation).subscribe(data => {
          console.log(data)
        })
        this.chairs = null
        this.conferences = null
        this.articlesAccepted = null
        this.articleSelected = null
        this.updateFinish = true
      }
    }
  }
}
