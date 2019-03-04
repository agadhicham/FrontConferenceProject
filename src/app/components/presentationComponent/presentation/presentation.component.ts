import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/app/services/conference.service';
import { ArticleService } from 'src/app/services/article.service';
import { PresentationService } from 'src/app/services/presentation.service';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { Conference } from 'src/app/modules/conference/conference';
import { ChairModule } from 'src/app/modules/chair/chair.module';
import { ChairService } from 'src/app/services/chair.service';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { RoleModule } from 'src/app/modules/role/role.module';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  chair = new ChairModule(0, "", "", new RoleModule(0, ""));
  articlesAccepted: Array<ArticleModule>;
  allArticlesAccepted: Array<ArticleModule>;
  chairs: Array<ChairModule>;
  domaines: Array<DomaineModule>;
  private conferences: Array<any>
  private conference = new Conference();
  presentation = new PresentationModule(0, new Conference(), new ArticleModule(0, '', '', new DomaineModule(0, '')), this.chair);


  constructor(private presentationService: PresentationService, private conferenceService: ConferenceService,
    private articleService: ArticleService, private chairService: ChairService,
    private router: Router) { }

  ngOnInit() {
    this.getAllArticlesAccepted();

  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  getAllArticlesAccepted() {
    this.articleService.getAllAccepted()
      .subscribe(data => {
        this.allArticlesAccepted = data,
          this.articlesAccepted = data
      }, error => console.log(error));
  }
  getAllChairs() {
    this.chairService.getAll()
      .subscribe(data => {
        this.chairs = data,
        console.log(data)
      }, error => console.log(error));
  }

  getAllConferences() {
    this.conferenceService.getAll()
      .subscribe(data => {
        this.conferences = data
      }, error => console.log(error));
  }

  search(title) {
    this.articlesAccepted = this.allArticlesAccepted.filter(item => (this.filterByTitle(item, title) || this.filterByDomaine(item, title)));
  }

  filterByTitle(item, title) {
    return item.title.toLowerCase().includes(title.toLowerCase());
  }
  filterByDomaine(item, domaineName) {
    return item.domaine.name.toLowerCase().includes(domaineName.toLowerCase());
  }
  // show(article) {
  //   this.navigateTo('articles/show/' + article.id);
  // }

  ObjetSelected(objet) {
    if (objet != null && this.articlesAccepted != null) {
      this.article = objet
      this.presentation.article = this.article
      this.articlesAccepted = null;
      this.getAllConferences();
    } else if (this.article != null && this.conferences != null) {
      this.conference = objet;
      this.presentation.conference = objet;
      this.conferences=null;
      this.getAllChairs()
    } else if (this.article != null && this.conference != null && this.chairs != null) {
      this.chair=objet
      this.presentation.chair=this.chair
      this.chairs = null
      this.getAllArticlesAccepted();
      this.presentationService.create(this.presentation).subscribe(data => {
        console.log(data)
      }, error => console.log(error));
    }

  }


}
