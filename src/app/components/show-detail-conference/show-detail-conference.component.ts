import { Conference } from './../../modules/conference/conference';
import { ConferenceService } from './../../services/conference.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-detail-conference',
  templateUrl: './show-detail-conference.component.html',
  styleUrls: ['./show-detail-conference.component.css']
})
export class ShowDetailConferenceComponent implements OnInit {

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
