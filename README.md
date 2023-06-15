# Education Platform for Commeric

## Our structure

```
 -----------------------
|    VIEW           VO  |
|      |                |
|      |            DTO |
|   SERVICE         DO  |
|      |                |
|      |                |
|   PERSISTENCE     PO  |
 -----------------------
```

## GraphQL

#### Why we use it

1. no redundant
2. one request, 2 dtos data
3. params verification
4. document auto-generate

#### How to use it

1. URL: http://localhost:3000/graphql
2. OperationName: findUserById
3. Query: "query findUserById ....."
4. Variables: id, ...

#### Example

- query VO <----> DTO(s)
- mutation

```
query findUserById($id: String) {
  a: findUserById(id: $id) {
    name
    id
    desc
  }
  b: findSchoolById(id: $id) {
    name
    id
  }
}
```

```
{
  "data": {
    "a": {
      "id": "xxxx",
      "name": "name",
      "desc": "desc",
    },
    "b": {
      "id": "xxxx",
      "name": "name",
    }
  }
}
```

## Vite

#### Why we use it

1. FAST
