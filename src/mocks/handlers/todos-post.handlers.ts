import { Todo } from '@shared/service';
import { baseHandler } from '../utils/base.handler';
import { addTodoCore } from './coreTodo';

type TodoPostRequest = {
  request: Request;
};

const todosPostHandler = async ({ request }: TodoPostRequest) => {
  const { title }: { title: string } = await request.json();

  if (title) {
    const newTodo = addTodoCore(title);

    return baseHandler({ data: { data: newTodo }, statusCode: 201 });
  }

  return baseHandler({ data: null, statusCode: 400 });
};

export { todosPostHandler };
