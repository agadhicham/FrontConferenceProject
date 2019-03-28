import { Router } from '@angular/router';
import { JuryService } from 'src/app/services/jury.service';
import { JuryModule } from './../../../modules/jury/jury.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jury',
  templateUrl: './list-jury.component.html',
  styleUrls: ['./list-jury.component.css']
})
export class ListJuryComponent implements OnInit {

  private idChair:number;
  chaire:JuryModule= new JuryModule(0,"","","")
   private chaires: Array<any>
  constructor(private chairService: JuryService, private router:Router) { }

  ngOnInit() {
    this.chairService.getAll().subscribe(data=>{
      console.log(data)
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
