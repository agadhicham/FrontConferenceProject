import { Router } from '@angular/router';
import { ChairService } from './../../services/chair.service';
import { ChairModule } from './../../modules/chair/chair.module';
import { Component, OnInit } from '@angular/core';
import { RoleModule } from 'src/app/modules/role/role.module';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-select-option-to-administration',
  templateUrl: './select-option-to-administration.component.html',
  styleUrls: ['./select-option-to-administration.component.css']
})
export class SelectOptionToAdministrationComponent implements OnInit {

  chaire: ChairModule = new ChairModule(0, "", "", new RoleModule(0, ""));
  constructor(private chair: ChairService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    if (this.accountService.typeOfCurrentUser() == "ADMIN") {
      console.log("test")
    }
    else {
      this.router.navigate(['/'])
    }
  }

  saveChair(dataForm) {
    console.log(dataForm)
    this.chair.create(dataForm)
      .subscribe(data => {
        console.log(data)
        console.log("chair added succefuly")
        this.router.navigate(['chairList'])

      }, error => {
        console.log(error)
      })


  }

}
