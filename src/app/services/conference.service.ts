import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conference } from '../modules/conference/conference';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  constructor(private http: HttpClient, private accountservice: AccountService) {
  }
  getAll(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get("http://localhost:8080/conferences/All_Conference", { headers });
  }
  getOne(id: number): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get("http://localhost:8080/conferences/conference/" + id, { headers });
  }

  saveConference(conference: Conference): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post("http://localhost:8080/conferences/conference/add", conference, { headers })
  }

  getConferences(motCle: string, page: number, size: number) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.get("http://localhost:8080/conferences/chercherConference?mc=" + motCle + "&size=" + size + "&page=" + page, { headers });
  }

}
