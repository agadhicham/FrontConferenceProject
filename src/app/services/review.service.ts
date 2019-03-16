import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { ReviewModule } from '../modules/review/review.module';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  uri: string = 'http://localhost:8080/reviews';

  constructor(private http: HttpClient, private accountService: AccountService) { }

  getAll(articleId): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountService.getToken());
    return this.http.get(`${this.uri}/${articleId}`, { headers });
  }

  review(review) :any{
    review.reviewer.username = this.accountService.getCurrentUser();
    const headers = new HttpHeaders().set("authorization", this.accountService.getToken());
    return this.http.post(`${this.uri}`, review, { headers });
  }


}
