import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Instrumento } from '../entidades/Instrumento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  url = 'http://localhost:3001/api/instrumento/';
  urlDelete = 'http://localhost:3001/api/instrumento/delete/';
  urlEdit = 'http://localhost:3001/api/instrumento/edit/';
  urlCreate = 'http://localhost:3001/api/instrumento/create';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Instrumento[]> {
    return this.http.get<Instrumento[]>(this.url);
  }

  getOne(id: number): Observable<Instrumento> {
    return this.http.get<Instrumento>(this.url + id);
  }

  post(instrumento: Instrumento): Observable<Instrumento> {
    return this.http.post<Instrumento>(this.urlCreate, instrumento);
  }

  put(instrumento: Instrumento): Observable<Instrumento> {
    return this.http.put<Instrumento>(this.urlEdit + instrumento.id, instrumento);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.urlDelete + id);
  }
}







