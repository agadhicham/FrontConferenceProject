import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { PresentationService } from 'src/app/services/presentation.service';
import { JuryService } from 'src/app/services/jury.service';
import { Router } from '@angular/router';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { Conference } from 'src/app/modules/conference/conference';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { ChairModule } from 'src/app/modules/chair/chair.module';
import { RoleModule } from 'src/app/modules/role/role.module';
import { JuryModule } from 'src/app/modules/jury/jury.module';
import { AffectationModule } from 'src/app/modules/affectation/affectation.module';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  chair = new ChairModule(0, "", "", new RoleModule(0, ""));
  conference = new Conference();
  presentation = new PresentationModule(0, this.conference, this.article, this.chair);
  jurys: Array<JuryModule>
  jury = new JuryModule(0, "", "", "")
  affectation = new AffectationModule(0, this.presentation, this.jury)
  allPresentations: Array<PresentationModule>
  PresentationsNotSelected: Array<PresentationModule>

  constructor(private affectationService: AffectationService, private presentationService: PresentationService, private juryService: JuryService, private router: Router) { }

  ngOnInit() {
    this.getAllPresentations()
  }
  getAllPresentations() {
    this.presentationService.getAll().subscribe(data => {
      this.allPresentations = data
      this.PresentationsNotSelected = data
      console.log(data)
    }, error => console.log(error));
  }
  getAllJurys() {
    this.juryService.getAll().subscribe(data => {
      this.jurys = data
      console.log(data)
    }, error => console.log(error));
  }
  show(objet) {

  }
  removeElementFromArray(array, objet) {
    array.forEach((element, indx) => {
      if (element == objet) {
        array.splice(indx, 1);
      }
    });
  }
  ObjetSelected(objet) {
    if (objet != null) {
      if (this.allPresentations != null && this.jurys==null) {
        this.presentation = objet;
        this.removeElementFromArray(this.PresentationsNotSelected, this.presentation);
        this.getAllJurys();
        this.allPresentations = null
      } else if (this.jurys != null && this.allPresentations == null) {
        this.jury = objet
        this.affectationService.create(this.affectation).subscribe(data => {
          console.log(data)
        }, error => console.log(error));
        this.allPresentations = this.PresentationsNotSelected
        this.jurys=null;
      }

    }
  }

}
