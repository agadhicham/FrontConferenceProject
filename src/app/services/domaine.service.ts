import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  uri: string = 'http://localhost:8080/domaines';

  constructor(private http: HttpClient,private accountservice:AccountService) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}`,{headers});
  }

  getOne(id): any {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/${id}`,{headers});
  }

  create(domaine) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post(`${this.uri}`, domaine,{headers});
  }

  edit(domaine) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.put(`${this.uri}`, domaine,{headers});
  }

  remove(id) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.delete(`${this.uri}/${id}`,{headers});
  }
}
