import { Router } from '@angular/router';
import { DomaineService } from './../../../services/domaine.service';
import { DomaineModule } from './../../../modules/domaine/domaine.module';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.css']
})
export class ListDomaineComponent implements OnInit {
  private idChair:number;
  chaire:DomaineModule= new DomaineModule(0,"")
   private chaires: Array<any>
  constructor(private chairService: DomaineService, private router:Router) { }

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
      this.router.navigate(['domaineList'])
    },error=>{
      console.log(error)
    })
  }

  editChair(chair)
  {

    this.chaire=chair;
  }

  updateChair()
  {
    this.chairService.edit(this.chaire)
    .subscribe(data=>{
      console.log('update of this chair it done')
      alert('alert updating with success')
    },error=>{
      console.log(error)
    })
  }

}
