import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/app/services/conference.service';


@Component({
  selector: 'app-conference-view',
  templateUrl: './conference-view.component.html',
  styleUrls: ['./conference-view.component.css']
})
export class ConferenceViewComponent implements OnInit {

  private conferences: Array<any>;
  constructor(private  conferenceService:ConferenceService) { }

  ngOnInit() {
    this.conferenceService.getAll().subscribe(data=>
    {
         this.conferences=data;
    })
  }

}
