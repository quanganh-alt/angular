import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ipost} from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.API_URL);
  }

  getPostID(id: number): Observable<Ipost> {
    return this.http.get<Ipost>(`${this.API_URL}/${id}`);
  }
  createPost(newPost: Partial<Ipost>): Observable<Ipost> {
    return this.http.post<Ipost>(this.API_URL, newPost);
  }
  deletePost(id: number): Observable<Ipost> {
    return this.http.delete<Ipost>(`${this.API_URL}/${id}`);
  }
  updatePost(post: Partial<Ipost>): Observable<Ipost> {
    return this.http.patch<Ipost>(`${this.API_URL}/${post.id}`, post);
  }
}
