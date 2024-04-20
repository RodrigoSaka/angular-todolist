import { baseHandler } from '../utils/base.handler';
import { deleteTodoCore } from './coreTodo';

type TodoDeleteRequest = {
  params: {
    id?: number;
  };
  request: Request;
};

const todosDeleteHandler = ({ params }: TodoDeleteRequest) => {
  const { id } = params;

  if (id) {
    deleteTodoCore(+id);

    return baseHandler({ data: null, statusCode: 204 });
  }

  return baseHandler({ data: null, statusCode: 400 });
};

export { todosDeleteHandler };
