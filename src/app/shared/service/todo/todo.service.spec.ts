import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';

describe('TodoService', () => {
  let service: TodoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TodoService, { provide: HttpClient, useValue: { get: jest.fn() } }] });
    service = TestBed.inject(TodoService);

    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get todos', () => {
    service.todos();

    expect(http.get).toHaveBeenCalledWith('https://api.fake.com/todos');
  });
});
