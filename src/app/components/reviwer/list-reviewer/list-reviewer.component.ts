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
  //chaire:ReviewModule= new ReviewModule()
   private chaires: Array<any>
  constructor(private chairService: ReviewService, private router:Router) { }

  ngOnInit() {



  }






}
