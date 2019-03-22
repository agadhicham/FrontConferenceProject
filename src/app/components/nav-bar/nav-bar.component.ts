import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser:string="";

  constructor(private acccountService:AccountService,private router:Router) { }

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
  navigateTo(path) {
    if (this.currentUser == "ADMIN") {
      this.router.navigate([path]);
    } else if (this.currentUser != "ADMIN") {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
