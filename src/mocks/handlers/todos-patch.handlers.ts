import { Todo } from '@shared/service';
import { baseHandler } from '../utils/base.handler';
import { updateTodoCore } from './coreTodo';

type TodoPatchRequest = {
  params: {
    id?: number;
  };
  request: Request;
};

const todosPatchHandler = async ({ params, request }: TodoPatchRequest) => {
  const { id } = params;
  const todos: Partial<Pick<Todo, 'title' | 'completed'>> = await request.json();

  if (id && (todos.title || todos.completed !== undefined)) {
    updateTodoCore(+id, todos);

    return baseHandler({ data: null, statusCode: 204 });
  }

  return baseHandler({ data: null, statusCode: 400 });
};

export { todosPatchHandler };
