import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
import { Conference } from './../../../modules/conference/conference';
import { ConferenceService } from './../../../services/conference.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-of-conferences',
  templateUrl: './administration-of-conferences.component.html',
  styleUrls: ['./administration-of-conferences.component.css']
})
export class AdministrationOfConferencesComponent implements OnInit {
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





  saveConference(dataForm){
    console.log(dataForm)
    this.conferenceService.saveConference(dataForm)
    .subscribe(data=>{
      console.log(data)
      console.log("conference added succefuly")
      this.route.navigate(['home'])

    },error=>{
      console.log(JSON.parse(error._body),Message)
    })


  }


}
