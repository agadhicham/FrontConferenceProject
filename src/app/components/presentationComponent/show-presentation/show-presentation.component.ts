import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PresentationService } from 'src/app/services/presentation.service';
import { ChairModule } from 'src/app/modules/chair/chair.module';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { RoleModule } from 'src/app/modules/role/role.module';
import { Conference } from 'src/app/modules/conference/conference';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { AccountService } from 'src/app/services/account.service';
import { AffectationService } from 'src/app/services/affectation.service';
import { AffectationModule } from 'src/app/modules/affectation/affectation.module';

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
  affectations: Array<AffectationModule>
  note = 0;
  constructor(private activateRoute: ActivatedRoute, private presentationService: PresentationService, private affectationService: AffectationService, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    if (this.accountService.typeOfCurrentUser() == "ADMIN") {
      this.activateRoute.params.subscribe(params => {
        this.presentationService.getOne(params.id).subscribe(data => {
          this.presentation = data;
          this.article = data.article
          this.chair = data.chair
          this.conference = data.conference
          console.log(data)
        }, error => console.log(error));
        this.getAffectations(params.id) 
      });
    }
    else {
      this.router.navigate(['/'])
    }
  }
  getAffectations(id) {
    this.affectationService.findByPresentation(id).subscribe(data => {
      this.affectations = data
      this.calculateNote(data);
    }, error => console.log(error));
  }

  calculateNote(affectations){
    let total=0
  affectations.forEach(element => {
    total += element.mark;
  });
  this.note =total/this.affectations.length
}
  saveMarks() {
    this.affectations.forEach(affectation => {
      this.affectationService.create(affectation).subscribe();
    })
  }
}
