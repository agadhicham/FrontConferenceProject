import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { PaymentModule } from 'src/app/modules/payment/payment.module';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  payment = new PaymentModule(0,0, '', this.article);
  clientToken:any =''
  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.articleService.getOne(params.id).subscribe(data => {
          this.article = data;
        }, error => console.log(error));
      }
    });

  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  isUserHasAcessToPay():boolean{
    return (this.article.status=='ACCEPTED') && (this.article.author.username==this.accountService.getCurrentUser());
  }

  createPurchase(nonce: string, chargeAmount: number) {
    this.payment.article = this.article
    this.payment.chargeAmount = chargeAmount;
    this.payment.nonce = nonce
    return this.articleService.createPurchase(this.payment);
  }
  enabledStyle = {
    'background-color': '#000000',
    'color': '#ffffff',
    'border': 'none',
    'border-radius': '4px',
    'height': '40px',
    'line-height': '40px',
    'font-size': '16px',
    'cursor': 'pointer'
   };
   
  disabledStyle = {
    'background-color': 'lightgray',
    'color': '#ffffff',
    'border': 'none',
    'border-radius': '4px',
    'height': '40px',
    'line-height': '40px',
    'font-size': '16px',
    'cursor': 'not-allowed'
  };
}

