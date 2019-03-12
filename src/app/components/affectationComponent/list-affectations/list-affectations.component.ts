import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { AffectationModule } from 'src/app/modules/affectation/affectation.module';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent implements OnInit {
  allAffectation:Array<AffectationModule>
  constructor(private affectationService:AffectationService) { }

  ngOnInit() {
    this.getAllAffectations()
  }
  getAllAffectations() {
    this.affectationService.getAll()
      .subscribe(data => {
        this.allAffectation = data,
          console.log(data)
      }, error => console.log(error));
  }

}
