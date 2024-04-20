import { Todo } from '@shared/service';

const sessionStorageKey = 'todos';
const todosCore = [
  {
    id: 1,
    title: 'comprar pão e leite',
    completed: false
  },
  {
    id: 2,
    title: 'pagar as contas do mês',
    completed: false
  },
  {
    id: 3,
    title: 'marcar consulta no dentista',
    completed: false
  },
  {
    id: 4,
    title: 'fazer exercícios físicos',
    completed: true
  },
  {
    id: 5,
    title: 'ler um livro novo',
    completed: false
  },
  {
    id: 6,
    title: 'ligar para os amigos',
    completed: false
  },
  {
    id: 7,
    title: 'organizar o guarda-roupa',
    completed: false
  },
  {
    id: 8,
    title: 'assistir a um filme',
    completed: true
  },
  {
    id: 9,
    title: 'estudar para a prova',
    completed: false
  },
  {
    id: 10,
    title: 'fazer uma viagem',
    completed: true
  },
  {
    id: 11,
    title: 'trocar o óleo do carro',
    completed: true
  },
  {
    id: 12,
    title: 'cuidar das plantas',
    completed: false
  },
  {
    id: 13,
    title: 'doar roupas usadas',
    completed: false
  },
  {
    id: 14,
    title: 'fazer um bolo',
    completed: true
  },
  {
    id: 15,
    title: 'aprender um idioma',
    completed: true
  },
  {
    id: 16,
    title: 'meditar',
    completed: true
  },
  {
    id: 17,
    title: 'escrever um diário',
    completed: true
  },
  {
    id: 18,
    title: 'ir ao mercado',
    completed: false
  },
  {
    id: 19,
    title: 'limpar a casa',
    completed: true
  },
  {
    id: 20,
    title: 'comprar um presente',
    completed: true
  },
  {
    id: 21,
    title: 'fazer um curso online',
    completed: false
  },
  {
    id: 22,
    title: 'visitar os pais',
    completed: true
  },
  {
    id: 23,
    title: 'ir ao cinema',
    completed: false
  },
  {
    id: 24,
    title: 'comprar ração para o cachorro',
    completed: false
  },
  {
    id: 25,
    title: 'fazer um jantar especial',
    completed: true
  },
  {
    id: 26,
    title: 'tirar fotos',
    completed: true
  },
  {
    id: 27,
    title: 'ir ao parque',
    completed: true
  },
  {
    id: 28,
    title: 'fazer as unhas',
    completed: false
  },
  {
    id: 29,
    title: 'assistir a uma série',
    completed: false
  },
  {
    id: 30,
    title: 'tocar um instrumento',
    completed: true
  },
  {
    id: 31,
    title: 'fazer uma caminhada',
    completed: false
  },
  {
    id: 32,
    title: 'ler as notícias',
    completed: false
  },
  {
    id: 33,
    title: 'fazer um piquenique',
    completed: false
  }
];

saveTodos(todosCore);

export function getTodosCore(completed?: boolean) {
  const todos = getTodos();

  if (completed) {
    return todos.filter(todo => todo.completed);
  }

  return todos;
}

export function addTodoCore(title: string) {
  const todos = getTodos();
  const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
  const newTodo = {
    id: maxId + 1,
    title,
    completed: false
  };

  todos.push(newTodo);

  saveTodos(todos);

  return newTodo;
}

export function updateTodoCore(id: number, todo: Partial<Pick<Todo, 'title' | 'completed'>>) {
  const todos = getTodos();
  const index = todos.findIndex(t => t.id === id);
  todos[index] = { ...todosCore[index], ...todo };

  saveTodos(todos);
}

export function deleteTodoCore(id: number) {
  let todos = getTodos();
  todos = todos.filter(todo => todo.id !== id);

  saveTodos(todos);
}

function getTodos() {
  const todosSession = sessionStorage.getItem(sessionStorageKey) || '[]';
  const todos = JSON.parse(todosSession);

  return todos as Todo[];
}

function saveTodos(todos: Todo[]) {
  sessionStorage.setItem(sessionStorageKey, JSON.stringify(todos));
}
