import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModule } from '../modal/user/user.module';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new UserModule(0, "", "", "");
  test: boolean = false;

  constructor(private accountService: AccountService, private route: Router) { }

  ngOnInit() {
  }
  register() {
    console.log(this.user.repassword)

    if (this.user.password == this.user.repassword) {
      this.accountService.register(this.user).subscribe(e => {
        console.log(e)
        this.route.navigate(["/login"]);
        this.test = false;
      });
    } else {
      this.test = true;
    }
  }
}
