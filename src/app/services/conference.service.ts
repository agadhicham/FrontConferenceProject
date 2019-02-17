import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Conference} from '../model.confrerence/conference';


@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any>{
    return this.http.get("http://localhost:8080/conferences/All_Conference");
  }
  getOne (id: number): Observable<any>{
    return this.http.get("http://localhost:8080/conferences/conference/"+id);
  }

  saveConference(conference:Conference): Observable<any>{
    return this.http.post("http://localhost:8080/conferences/conference/add",conference)
  }

  getConferences(motCle:string, page:number, size:number){
    return this.http.get("http://localhost:8080/conferences/chercherConference?mc="+motCle+"&size="+size+"&page="+page);
  }

}
