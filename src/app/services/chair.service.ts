import { ChairModule } from 'src/app/modules/chair/chair.module';
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
  getAllReviwers(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get('http://localhost:8080/reviwers',{headers});
  }
  getOne(id:number): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/${id}`,{headers});
  }
/*
  getOne(id: number): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get("http://localhost:8080/chair/" + id, { headers });
  }*/
  create(chairs) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post(`${this.uri}`, chairs, { headers });
  }

  edit(chairs) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.put(`${this.uri}`, chairs, { headers });
  }
  upConference(chair: ChairModule): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post("http://localhost:8080/chair/put/"+chair.id, chair, { headers })
  }

  remove(id) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.delete(`${this.uri}/${id}`,{headers});
  }

}
