import { Component, OnInit } from '@angular/core';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { ChairModule } from 'src/app/modules/chair/chair.module';
import { Conference } from 'src/app/modules/conference/conference';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from 'src/app/services/presentation.service';
import { RoleModule } from 'src/app/modules/role/role.module';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit-presentation',
  templateUrl: './edit-presentation.component.html',
  styleUrls: ['./edit-presentation.component.css']
})
export class EditPresentationComponent implements OnInit {
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  articleSelected: any = null;
  chair = new ChairModule(0, "", "", new RoleModule(0, ""));
  chairSelected: any = null;
  conference = new Conference();
  conferenceSelected: any = null;
  presentation = new PresentationModule(0, this.conference, this.article, this.chair);
  articlesAccepted: Array<ArticleModule>;
  allArticlesAccepted: Array<ArticleModule>;
  conferences: Array<any>
  constructor(private activateRoute: ActivatedRoute, private presentationService: PresentationService, private articleService: ArticleService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.presentationService.getOne(params.id).subscribe(data => {
        this.presentation = data;
        this.article = this.presentation.article
      }, error => console.log(error));
    });
    this.getAllArticlesAccepted();
  }
  removeElementFromArray(array, objet) {
    if(array!=null && objet!=null){
      array.forEach((element, indx) => {
        if (element == objet) {
          array.splice(indx, 1);
        }
      });
    }else{
      console.log('array or objet vide')
    }
  }
  getAllArticlesAccepted() {
    this.articleService.getAllAccepted()
      .subscribe(data => {
        this.allArticlesAccepted = data,
        console.log(this.articlesAccepted)
      }, error => console.log(error));
  }
  ObjetSelected(objet) {
    if (objet != null) {
      if (this.article != null && this.articleSelected == null) {
        this.articleSelected=objet
        this.removeElementFromArray(this.allArticlesAccepted, this.article)
        this.article=null
        this.articlesAccepted=this.allArticlesAccepted
      }
    }
  }
  ObjetChose(objet) {
    if (objet != null) {
      if (this.article == null && this.articlesAccepted != null) {
        this.articleSelected = objet
        this.removeElementFromArray(this.allArticlesAccepted, objet)
        this.articlesAccepted = null
      }
    }
  }

}
