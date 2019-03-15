import { ChairModule } from 'src/app/modules/chair/chair.module';
import { Router } from '@angular/router';
import { ChairService } from './../../../services/chair.service';
import { Component, OnInit } from '@angular/core';
import { RoleModule } from 'src/app/modules/role/role.module';

@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.css']
})
export class ListChairComponent implements OnInit {
  chaire:ChairModule= new ChairModule(0,"","",new RoleModule(0,""))
   private chaires: Array<any>
  constructor(private chairService: ChairService, private router:Router) { }

  ngOnInit() {
    this.chairService.getAll().subscribe(data=>{

      this.chaires=data
    },error=>{
      console.log(error)
    })
  }

  deletChair(id:number)
  {
    this.chairService.remove(id)
    .subscribe(data=>{
      console.log('deleting.............. of this conference it done')
      alert('chaire deleted with success')
      this.router.navigate(['chairList'])
    },error=>{
      console.log(error)
    })
  }

}
