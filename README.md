
### Queries

#### get todos

```graphql
query getTodos {
  todos {
    content
    id
    createdAt
    isCompleted
  }
}
```

### mutations

#### createTodo
```graphql
mutation {
  createTodo(input: {content: "go to the gym"}){
    id 
  }
}
```
#### updateTodoStatus
```graphql
mutation {
  updateTodoStatus(id: "b325fe54-8285-4c42-a468-bce7a9b1c8d2", isCompleted: true)
}
```

#### removeTodo
```graphql
mutation {
  removeTodo(id: "b325fe54-8285-4c42-a468-bce7a9b1c8d2")
}
```