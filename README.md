## Angular - Todo List

### Execução do projeto

1. Faça instalação de dependências `npm i`
2. Execute a aplicação com `npm start`

---
### Detalhes

Este projeto consiste em um desafio de programação com o objetivo de desenvolver uma aplicação Angular para gerenciar listas de tarefas (Todo List). O desafio deve ser realizado seguindo as melhores práticas de desenvolvimento.

---
### Funcionalidades

Aplicação deve ser capaz de:

- Listar todos os todos
- Editar os todos
- Deletar os todos
- Adicionar novo todo
- Filtrar os todos como "todos", "completos" e "incompletos"

---
### Detalhes da API interna

**Detalhes**

- **URL base:** https://api.fake.com
- **Métodos que será usado:** 
  - `GET`: `https://api.fake.com/todos` ou `https://api.fake.com/todos/<id>`
  - `POST`: `https://api.fake.com/todos`
    - Possiveis parâmetros do body
      - title: string
  - `PATCH`: `https://api.fake.com/todos/<id>`
    - Possiveis parâmetros do body
      - completed: boolean
      - title: string
  - `DELETE`: `https://api.fake.com/todos/<id>`
  - `GET / Filter`: `https://api.fake.com/todos?completed=false`

**Retorno**

```json
[
  {
    "id": 2,
    "title": "Cuidadar da planta",
    "completed": false
  },
  {
    "id": 4,
    "title": "ler as notícias",
    "completed": false
  }
]
```

---
### Resultado final
![Todo list](./resources/todolist.png)