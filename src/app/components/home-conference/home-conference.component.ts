import { ConferenceService } from './../../services/conference.service';
import { Conference } from './../../modules/conference/conference';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-conference',
  templateUrl: './home-conference.component.html',
  styleUrls: ['./home-conference.component.css']
})
export class HomeConferenceComponent implements OnInit {
  private conferences: Array<any>
  private conference:Conference=new  Conference();

  itemArray=[];
  page:number=0;
  size:number=2;
  motCle:string="";
  pages:Array<number>
  private pageConferences;
  pageActuel:number=1;


  constructor(private  conferenceService:ConferenceService, private route:Router) { }

  ngOnInit() {
    this.conferenceService.getAll().subscribe(data=>
    {
    this.conferences=data;
    })
    this.doSearch();
  }
  showOne(id:number){
    this.route.navigate(['show',id]);
  }

  doSearch(){
    this.conferenceService.getConferences(this.motCle, this.page, this.size).
    subscribe(data=>{
       this.pageConferences=data;
      // this.pages=new Array(data.totalPages);

    })
  }

  chercher(){
    this.doSearch();
  }

}
