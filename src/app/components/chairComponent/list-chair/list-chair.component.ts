import { ChairModule } from 'src/app/modules/chair/chair.module';
import { Router } from '@angular/router';
import { ChairService } from './../../../services/chair.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.css']
})
export class ListChairComponent implements OnInit {
 // chair:ChairModule= new ChairModule()
   private chaires: Array<any>
  constructor(private chairService: ChairService, private router:Router) { }

  ngOnInit() {
    this.chairService.getAll().subscribe(data=>{

      this.chaires=data
    },error=>{
      console.log(error)
    })
  }

}
