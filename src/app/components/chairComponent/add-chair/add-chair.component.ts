import { ChairModule } from 'src/app/modules/chair/chair.module';
import { Router } from '@angular/router';
import { ChairService } from 'src/app/services/chair.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-chair',
  templateUrl: './add-chair.component.html',
  styleUrls: ['./add-chair.component.css']
})
export class AddChairComponent implements OnInit {
  chaire: ChairModule;

  constructor(private chair:ChairService, private router:Router) { }

  ngOnInit() {

  }

  saveChair(dataForm) {
    console.log(dataForm)
    this.chair.create(dataForm)
      .subscribe(data => {
        console.log(data)
        console.log("chair added succefuly")
        this.router.navigate(['home'])

      }, error => {
        console.log(error)
      })


  }

}
