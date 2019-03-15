import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser:string="";

  constructor(private acccountService:AccountService) { }

  ngOnInit() {
    this.getCurrentUser()
    console.log(this.currentUser)
  }
  onLogout(){
    this.acccountService.onLogout();
  }
  getCurrentUser(){
    this.currentUser=this.acccountService.typeOfCurrentUser()
  }


}
