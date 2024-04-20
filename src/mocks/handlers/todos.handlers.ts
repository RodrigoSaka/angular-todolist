import { baseHandler } from '../utils/base.handler';
import { params } from '../utils/params';
import { getTodosCore } from './coreTodo';

const todosHandler = ({ request }: { request: Request }) => {
  const { url } = request;
  const { completed } = params.queryParams(url);

  if (completed === 'true' || completed === 'false') {
    const completedBoolean = completed === 'true';

    return baseHandler({ data: { data: getTodosCore(completedBoolean) } });
  }

  return baseHandler({ data: { data: getTodosCore() } });
};

export { todosHandler };
