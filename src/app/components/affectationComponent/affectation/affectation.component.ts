import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { PresentationService } from 'src/app/services/presentation.service';
import { JuryService } from 'src/app/services/jury.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  presentationToUpdate = new PresentationModule(0, this.conference, this.article, this.chair);
  jurys: Array<JuryModule>
  jury = new JuryModule(0, "", "", "")
  juryToUpdate = new JuryModule(0, "", "", "")
  affectation = new AffectationModule(0, this.presentation, this.jury)
  affectationTopdate = new AffectationModule(0, this.presentationToUpdate, this.juryToUpdate)
  allPresentations: Array<PresentationModule>
  PresentationsNotSelected: Array<PresentationModule>
  updateFinished:boolean

  constructor(private affectationService: AffectationService, private presentationService: PresentationService, private juryService: JuryService, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllPresentations()
    this.updateFinished=false
    this.affectationTopdate = null
    this.juryToUpdate = null
    this.jurys=null
    this.activateRoute.params.subscribe(params => {
      if (params.id) {
        this.affectationService.getOne(params.id).subscribe(data => {
          this.affectationTopdate = data
          // this.juryToUpdate = this.affectationTopdate.jury
          this.presentationToUpdate = this.affectationTopdate.presentation
          console.log(data)
        }, error => console.log(error));
      }
    });
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
      if (this.affectationTopdate == null) {
        if (this.allPresentations != null && this.jurys == null) {
          this.presentation = objet;
          this.removeElementFromArray(this.PresentationsNotSelected, this.presentation);
          this.getAllJurys();
          this.allPresentations = null
          this.affectation.presentation = objet
        } else if (this.jurys != null && this.allPresentations == null) {
          this.jury = objet
          this.affectation.jury = objet
          console.log(this.affectation)
          this.affectationService.create(this.affectation).subscribe(data => {
            console.log(data)
          }, error => console.log(error));
          this.allPresentations = this.PresentationsNotSelected
          this.jurys = null;
        }
      }
      else if (this.affectationTopdate != null && this.presentationToUpdate != null && this.juryToUpdate == null) {
        console.log(objet)
        this.removeElementFromArray(this.PresentationsNotSelected, objet);
        this.presentationToUpdate = null
      }
      else if (this.affectationTopdate != null && this.presentationToUpdate == null && this.juryToUpdate != null) {
        console.log(objet)
        this.getAllJurys()
        this.juryToUpdate=null

      }
    }
  }
  

  updateObject(objet) {
    if (objet != null) {
      if(this.affectationTopdate != null && this.presentationToUpdate == null && this.juryToUpdate == null && this.jurys==null){
         this.affectationTopdate.presentation=objet
         this.juryToUpdate=this.affectationTopdate.jury
         this.presentationToUpdate == null
         console.log( this.affectationTopdate.presentation)
         console.log( this.affectationTopdate.jury)
      }else if(this.affectationTopdate != null && this.presentationToUpdate == null && this.juryToUpdate == null && this.jurys!=null){
        this.affectationTopdate.jury=objet
        console.log( "affectation finish"+this.affectationTopdate.presentation)
        console.log("affectation finish"+ this.affectationTopdate.jury)
        this.affectationService.edit(this.affectationTopdate).subscribe(data=>{
          console.log(data)
        }, error => console.log(error));
        this.updateFinished=true
        this.juryToUpdate=this.affectationTopdate.jury
        this.presentationToUpdate=this.affectationTopdate.presentation
      }
    }
  }

}
