import { ChairService } from 'src/app/services/chair.service';
import { ChairModule } from './../../../modules/chair/chair.module';
import { Router } from '@angular/router';
import { ReviewService } from './../../../services/review.service';
import { ReviewModule } from './../../../modules/review/review.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reviewer',
  templateUrl: './list-reviewer.component.html',
  styleUrls: ['./list-reviewer.component.css']
})
export class ListReviewerComponent implements OnInit {

  private idChair:number;
  chaire:ChairModule= new ChairModule(0,"","",null)
   private chaires: Array<any>
  constructor(private chairService: ChairService, private router:Router) { }

  ngOnInit() {
    this.chairService.getAllReviwers().subscribe(data=>{
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







