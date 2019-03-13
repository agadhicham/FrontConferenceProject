import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  uri: string = 'http://localhost:8080/presentations';
  files: Array<any>;

  constructor(private http: HttpClient, private accountservice: AccountService) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}`,{headers});
  }
  getAllNotAffected(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/notAffected`,{headers});
  }
  getOne(id): any {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get(`${this.uri}/${id}`,{headers});
  }

  create(presentation) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post(`${this.uri}`, presentation, { headers });
  }

  edit(presentation) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.put(`${this.uri}`, presentation, { headers });
  }

  remove(id) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.delete(`${this.uri}/${id}`,{headers});
  }
  // getPresentationByPage(motCle: string, page: number, size: number) {
  //   const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
  //   return this.http.get("http://localhost:8080/presentations/findPresentation?mc=" + motCle + "&size=" + size + "&page=" + page, { headers });
  // }



}
