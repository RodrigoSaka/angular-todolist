import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/env';
import { Todo, TodoResponse } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  todos() {
    return this.http.get<TodoResponse>(`${environment.api}/todos`);
  }
}
