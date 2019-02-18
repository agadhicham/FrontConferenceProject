import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public onError = false;
  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    //console.log(form.value)
    this.accountService.onSignin(form).subscribe(
      (response) => {
        //console.log("respo: " + response);
        let jwtToken = response.headers.get('authorization');
        console.log("Token from response " + jwtToken);
        this.accountService.setToken(jwtToken);
        //console.log("Token from service "+ this.authentificationService.getToken());
        this.router.navigate(['/conferenceList']);
      },
      (error) => {
        form.reset();
        this.onError = true;
        console.log('error : ' + JSON.stringify(error));
      },
    );
  }

}
