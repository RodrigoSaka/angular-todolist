export interface TodoResponse {
  data: Todo[];
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
