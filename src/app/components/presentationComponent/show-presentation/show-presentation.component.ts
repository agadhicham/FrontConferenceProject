import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from 'src/app/services/presentation.service';
import { ChairModule } from 'src/app/modules/chair/chair.module';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { RoleModule } from 'src/app/modules/role/role.module';
import { Conference } from 'src/app/modules/conference/conference';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';

@Component({
  selector: 'app-show-presentation',
  templateUrl: './show-presentation.component.html',
  styleUrls: ['./show-presentation.component.css']
})
export class ShowPresentationComponent implements OnInit {
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  chair = new ChairModule(0, "", "", new RoleModule(0, ""));
  conference = new Conference();
  presentation = new PresentationModule(0, this.conference, this.article, this.chair);
  constructor(private activateRoute:ActivatedRoute,private presentationService:PresentationService ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.presentationService.getOne(params.id).subscribe(data => {
        this.presentation = data;
        this.article=this.presentation.article
        this.chair=this.presentation.chair
        this.conference=this.presentation.conference
        console.log(data)
      }, error => console.log(error));
    });
  }

}
