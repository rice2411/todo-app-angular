import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private apiUrl = 'http://localhost:3001/api/v1/task';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
