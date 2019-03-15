import { Router } from '@angular/router';
import { JuryService } from 'src/app/services/jury.service';
import { JuryModule } from './../../../modules/jury/jury.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-jury',
  templateUrl: './add-jury.component.html',
  styleUrls: ['./add-jury.component.css']
})
export class AddJuryComponent implements OnInit {
  chaire: JuryModule=new JuryModule(0,"","","");

  constructor(private chair:JuryService, private router:Router) { }

  ngOnInit() {

  }

  saveChair(dataForm) {
    console.log(dataForm)
    this.chair.create(dataForm)
      .subscribe(data => {
        console.log(data)
        console.log("chair added succefuly")
        this.router.navigate(['juryList'])

      }, error => {
        console.log(error)
      })


  }

}
