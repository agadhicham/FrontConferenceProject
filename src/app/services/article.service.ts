import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  uri: string = 'http://localhost:8080/';
  files: Array<any>;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.uri}articles`);
  }

  getOne(id): any {
    return this.http.get(`${this.uri}${id}`);
  }

  create(article) {
    return this.http.post(`${this.uri}`, article);
  }

  edit(article) {
    return this.http.put(`${this.uri}`, article);
  }

  remove(id) {
    return this.http.delete(`${this.uri}${id}`);
  }

  public getFiles(id): Observable<any> {
    return this.http.get(`${this.uri}${id}` + '/files');
  }

  public saveUploadedFile(file) {
    this.files.push(file);
  }
}
