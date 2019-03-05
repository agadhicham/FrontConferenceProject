import { Router } from '@angular/router';
import { ConferenceService } from 'src/app/services/conference.service';
import { Component, OnInit } from '@angular/core';
import { Conference } from 'src/app/modules/conference/conference';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent implements OnInit {
  conference: Conference = new Conference();
  constructor(private conference_service: ConferenceService, public router: Router) { }


  ngOnInit() {
  }

  saveConference(dataForm) {
    console.log(dataForm)
    this.conference_service.saveConference(dataForm)
<<<<<<< HEAD
    .subscribe(data=>{
      console.log(data)
      console.log("conference added succefuly")
      this.router.navigate(['admin'])

    },error=>{
      console.log(error,Message)
    })
=======
      .subscribe(data => {
        console.log(data)
        console.log("conference added succefuly")
        this.router.navigate(['home'])

      }, error => {
        console.log(JSON.parse(error._body), Message)
      })
>>>>>>> 9294691f97c7ba423bf176136a18e957c206d7c9


  }
}
