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

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  chair = new ChairModule(0, "", "", new RoleModule(0, ""));
  articles: Array<ArticleModule>;
  allArticles: Array<ArticleModule>;
  chairs: Array<ChairModule>;
  domaines: Array<DomaineModule>;
  private conferences: Array<any>
  private conference: Conference = new Conference();
  presentation = new PresentationModule(0, this.conference, this.article, this.chair);


  constructor(private presentationService: PresentationService, private conferenceService: ConferenceService, private articleService: ArticleService, private chairService: ChairService) { }

  ngOnInit() {
    this.getAllArticlesAccepted();
    this.getAllConferences();
    this.getAllChairs()
  }
  getAllArticlesAccepted() {
    this.articleService.getAllAccepted()
      .subscribe(data => {
        this.allArticles = data,
          // this.articles = data,
          console.log(data)
      }, error => console.log(error));
  }
  getAllChairs() {
    this.chairService.getAll()
      .subscribe(data => {
        this.chairs = data,
          // this.articles = data,
          console.log(data)
      }, error => console.log(error));
  }

  getAllConferences() {
    this.conferenceService.getAll()
      .subscribe(data => {
        this.conferences = data,
          console.log(data)
      }, error => console.log(error));
  }

  search(title) {
    this.articles = this.allArticles.filter(item => (this.filterByTitle(item, title) || this.filterByDomaine(item, title)));
  }

  filterByTitle(item, title) {
    return item.title.toLowerCase().includes(title.toLowerCase());
  }
  filterByDomaine(item, domaineName) {
    return item.domaine.name.toLowerCase().includes(domaineName.toLowerCase());
  }


}
