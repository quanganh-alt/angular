import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Itodo } from './itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_URL = 'http://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  getAllTodo(): Observable<Itodo[]>{
    return this.http.get<Itodo[]>(this.API_URL).pipe();
  }
  updateTodo(todo: Itodo): Observable<Itodo>{
    return this.http.patch<Itodo>(`${this.API_URL}/${todo.id}`,todo);
  }
  deleteTodo(id: number): Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`)
  }
  createTodo(todo : Partial<Itodo>):Observable<Itodo>{
    return this.http.post<Itodo>(this.API_URL,todo);
  }
}
