import { ConferenceService } from './../../../services/conference.service';
import { Conference } from 'src/app/modules/conference/conference';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-conference',
  templateUrl: './edit-conference.component.html',
  styleUrls: ['./edit-conference.component.css']
})
export class EditConferenceComponent implements OnInit {

  private conference:Conference=new  Conference();
  idConference:number;


  constructor(public activateRoute:ActivatedRoute, public coferenceService: ConferenceService, public router:Router) {

    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(activateRoute.snapshot.params['id']);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx')
    this.activateRoute= activateRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.coferenceService.getOne(this.idConference)
    .subscribe(data=>{

      this.conference=data;
    },error=>{
      console.log(error)
    })
  }

  upConf(){
    this.coferenceService.upConference(this.conference)
    .subscribe(data=>{
      console.log('update of this conference it done')
      alert('alert updating with success')
    },error=>{
      console.log('erooooorrr')
    })
  }

}
