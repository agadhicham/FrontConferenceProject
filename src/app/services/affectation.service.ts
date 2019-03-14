import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  uri: string = 'http://localhost:8080/affectations';
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

  create(affectation) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post(`${this.uri}`, affectation, { headers });
  }

  edit(affectation) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.put(`${this.uri}`, affectation, { headers });
  }

  remove(id) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.delete(`${this.uri}/${id}`,{headers});
  }


}
