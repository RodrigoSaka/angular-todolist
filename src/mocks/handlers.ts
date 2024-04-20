import { http } from 'msw';
import { todosHandler } from './handlers/todos.handlers';
import { todosDeleteHandler } from './handlers/todos-delete.handlers';
import { todosPatchHandler } from './handlers/todos-patch.handlers';
import { todosPostHandler } from './handlers/todos-post.handlers';

export const handlers = [
  http.get('https://api.fake.com/todos', todosHandler),
  http.post('https://api.fake.com/todos', todosPostHandler),
  http.delete('https://api.fake.com/todos/:id', todosDeleteHandler),
  http.patch('https://api.fake.com/todos/:id', todosPatchHandler)
];
