import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ChairService {
  uri: string = 'http://localhost:8080/chairs';
  files: Array<any>;

  constructor(private http: HttpClient, private accountservice: AccountService) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}`,{headers});
  }
  getOne(id): any {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/${id}`,{headers});
  }

  create(chairs) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post(`${this.uri}`, chairs, { headers });
  }

  edit(chairs) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.put(`${this.uri}`, chairs, { headers });
  }

  remove(id) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.delete(`${this.uri}/${id}`,{headers});
  }

}
