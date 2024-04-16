## Angular - Todo List

### Execução do projeto

1. Faça instalação de dependências `npm i`
2. Execute a aplicação com `npm start`

---
### Detalhes

O projeto Todo List é um desafio de programação que visa criar uma aplicação para gerenciar listas de tarefas.

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

- **URL base:** http://localhost:3001/todos
- **Métodos que será usado:** 
  - `GET`: `http://localhost:3001/todos` ou `http://localhost:3001/todos/<id>`
  - `POST`: `http://localhost:3001/todos`
  - `PATCH`: `http://localhost:3001/todos`
  - `DELETE`: `http://localhost:3001/todos/<id>`
  - `GET / Filter`: `http://localhost:3001/todos?completed=false`

> **Atenção:** ao executar algum método de alteração de conteúdo, será refletido no arquivo `api/db.json`

**Retorno**

```json
[
  {
    "userId": 1,
    "id": 2,
    "title": "Cuidadar da planta",
    "completed": false
  },
  {
    "userId": 2,
    "id": 4,
    "title": "ler as notícias",
    "completed": false
  }
]
```

---
### Resultado final
![Todo list](./resources/todolist.png)