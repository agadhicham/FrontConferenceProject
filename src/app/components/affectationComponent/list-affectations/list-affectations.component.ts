import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { AffectationModule } from 'src/app/modules/affectation/affectation.module';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent implements OnInit {
  allAffectation: Array<AffectationModule>
  currentUser: String = ""
  constructor(private affectationService: AffectationService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    if (this.accountService.typeOfCurrentUser() == "ADMIN") {
      this.getAllAffectations()
      this.currentUser = this.accountService.typeOfCurrentUser()
    }
    else {
      this.router.navigate(['/'])
    }
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
  edit(affectation) {
    this.navigateTo('affectations/edit/' + affectation.id);
  }

}
