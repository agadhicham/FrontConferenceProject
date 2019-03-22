import { Component } from '@angular/core';
import {Conference} from './modules/conference/conference';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'projetconference';
  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
    if(!this.accountService.isAuthenticated()){
      this.router.navigate(['/']);
      console.log("test")
    }
  }
}
