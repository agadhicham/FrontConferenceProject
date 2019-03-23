import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConferenceService } from 'src/app/services/conference.service';
import { Conference } from './../modules/conference/conference';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-confernce-user',
  templateUrl: './show-confernce-user.component.html',
  styleUrls: ['./show-confernce-user.component.css']
})
export class ShowConfernceUserComponent implements OnInit {
  idConference:number;
  conference:Conference= new Conference
   private conferences: Array<any>
  constructor(private conferenceService:ConferenceService, public activateRoute:ActivatedRoute, public router:Router) {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(activateRoute.snapshot.params['id']);
    console.log('ù*******')
     this.idConference=activateRoute.snapshot.params['id']
  }

  ngOnInit()
  {
    this.conferenceService.getOne(this.idConference).
    subscribe(data=>{
      this.conference=data
    },error=>{
      console.log(error);
    }
    )
  }

  onEdit(id:number)
  {
    this.router.navigate(['edit',id])
  }

  upConf()
  {
    this.conferenceService.upConference(this.conference)
    .subscribe(data=>{
      console.log('update of this conference it done')
      alert('alert updating with success')
    },error=>{
      console.log(error)
    })
  }

  deletConf(id:number)
  {
    this.conferenceService.deleteOne(id)
    .subscribe(data=>{
      console.log('deleting.............. of this conference it done')
      alert('conference deleted with success')
      this.router.navigate(['admin'])
    },error=>{
      console.log(error)
    })
  }

}
