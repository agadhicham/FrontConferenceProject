import { Router } from '@angular/router';
import { DomaineService } from 'src/app/services/domaine.service';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-domaine',
  templateUrl: './add-domaine.component.html',
  styleUrls: ['./add-domaine.component.css']
})
export class AddDomaineComponent implements OnInit {
  chaire: DomaineModule=new DomaineModule(0,"");

  constructor(private chair:DomaineService, private router:Router) { }

  ngOnInit() {

  }

  saveChair(dataForm) {
    console.log(dataForm)
    this.chair.create(dataForm)
      .subscribe(data => {
        console.log(data)
        console.log("doamine added succefuly")
        this.router.navigate(['domaineList'])

      }, error => {
        console.log(error)
      })


  }


}
