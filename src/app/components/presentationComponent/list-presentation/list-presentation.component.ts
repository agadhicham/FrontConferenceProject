import { Component, OnInit } from '@angular/core';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { PresentationService } from 'src/app/services/presentation.service';
import { Router } from '@angular/router';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { Conference } from 'src/app/modules/conference/conference';
import { ChairModule } from 'src/app/modules/chair/chair.module';
import { RoleModule } from 'src/app/modules/role/role.module';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.css']
})
export class ListPresentationComponent implements OnInit {
  allPresentations: Array<PresentationModule>
  PresentationsNotSelected: Array<PresentationModule>
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  conference = new Conference();
  chair = new ChairModule(0, "", "", new RoleModule(0, ""));
  currentUser: string = "";
  constructor(private presentationServie: PresentationService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    if (this.accountService.typeOfCurrentUser() == "ADMIN") {
      this.getAllPresentations();
    }
    else {
      this.router.navigate(['/'])
    }
  }
  getAllPresentations() {
    this.presentationServie.getAll()
      .subscribe(data => {
        this.allPresentations = data,
          console.log(data)
      }, error => console.log(error));
  }

  navigateTo(path) {
      this.router.navigate([path]);
  }
  // showObjet(objet: any) {
  //   if (objet != null) {
  //     if (objet instanceof ArticleModule) {
  //       console.log("************** true" + objet)
  //     } else if (objet instanceof Conference) {
  //       console.log("************** false" + objet)
  //     }
  //   }
  // }
  showConference(conference) {
    if (conference != null) {
      this.conference = conference;
    }
  }
  showArticle(article) {
    if (article != null) {
      this.article = article;
    }
  }
  showChair(chair) {
    if (chair != null) {
      this.chair = chair;
      console.log(chair)
    }
  }
  show(presentation) {
    this.navigateTo('presentations/show/' + presentation.id);
  }
  edit(presentation) {
    this.navigateTo('presentations/edit/' + presentation.id);
  }
}
