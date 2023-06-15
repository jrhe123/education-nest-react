# education-nest-react

### Our structure

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

### GraphQL

1. no redundant
2. one request, 2 dtos data
3. params verification
4. document auto-generate

- query VO <----> DTO(s)
- mutate

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
