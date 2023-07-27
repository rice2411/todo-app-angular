import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchTaskDto } from './dto/search-task.dto';

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
  getTasks(query: SearchTaskDto): Observable<any[]> {
    const params = new HttpParams()
      .set('search', query?.search)
      .set('status', query?.status)
      .set('priority', JSON.stringify(query?.priority));
    return this.http.get<any[]>(this.apiUrl, { params: params });
  }
  updateStatus(id: string): Observable<any[]> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.put<any>(url, null, httpOptions);
  }

  createTask(name: string, priority: string): Observable<any[]> {
    return this.http.post<any>(
      this.apiUrl,
      { name: name, priority: priority },
      httpOptions
    );
  }
}
