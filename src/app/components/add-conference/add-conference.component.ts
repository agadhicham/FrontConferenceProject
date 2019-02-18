import { Component, OnInit } from '@angular/core';
import {Conference} from '../modules/conference/conference';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent implements OnInit {
   conference:Conference=new Conference();
  constructor() { }

  ngOnInit() {
  }

}
