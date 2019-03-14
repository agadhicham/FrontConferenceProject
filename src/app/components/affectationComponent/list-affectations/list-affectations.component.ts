import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { AffectationModule } from 'src/app/modules/affectation/affectation.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent implements OnInit {
  allAffectation:Array<AffectationModule>
  constructor(private affectationService:AffectationService , private router: Router) { }

  ngOnInit() {
    this.getAllAffectations()
  }
  
  navigateTo(path) {
    this.router.navigate([path]);
  }
  getAllAffectations() {
    this.affectationService.getAll()
      .subscribe(data => {
        this.allAffectation = data,
          console.log(data)
      }, error => console.log(error));
  }
 edit(presentation) {
    this.navigateTo('presentations/edit/' + presentation.id);
  }

}
