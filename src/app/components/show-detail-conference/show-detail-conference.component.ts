import { Conference } from './../../modules/conference/conference';
import { ConferenceService } from './../../services/conference.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private conferenceService:ConferenceService, public activateRoute:ActivatedRoute) {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(activateRoute.snapshot.params['id']);
    console.log('ù*******')
     this.idConference=activateRoute.snapshot.params['id']
  }

  ngOnInit() {

    this.conferenceService.getOne(this.idConference).
    subscribe(data=>{
      this.conference=data
    },error=>{
      console.log(error);
    }
    )
  }

}
