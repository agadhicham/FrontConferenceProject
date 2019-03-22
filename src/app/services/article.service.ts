import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { PaymentModule } from '../modules/payment/payment.module';
import { ArticleModule } from '../modules/article/article.module';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  uri: string = 'http://localhost:8080/articles';
  files: Array<any>;

  constructor(private http: HttpClient, private accountservice: AccountService) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}`, { headers });
  }
  getAllAccepted(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(this.uri + "/accepted", { headers });
  }
  getOne(id): any {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/${id}`, { headers });
  }

  create(article): any {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post(`${this.uri}`, article, { headers });
  }

  edit(article) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.put(`${this.uri}`, article, { headers });
  }

  remove(id) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.delete(`${this.uri}/${id}`, { headers });
  }

  public getFiles(id): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/${id}` + '/files', { headers });
  }

  public getImage(id): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/${id}` + '/image', { headers });
  }

  public saveUploadedFile(file) {
    this.files.push(file);
  }
  createPurchase(payment: PaymentModule): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http
      .post('http://localhost:8080/client/payment/process', payment, { 'headers': headers })
  }
  
  getBraintreeClientToken():any{
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http
      .get('http://localhost:8080/client/token', { headers });
    }

}
