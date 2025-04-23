# knex-vs-kysely

"jump to definition" capability comparison for the two legendary libraries

- We can jump to definition from Knex result.
  - This is because it resolves original type, e.g., `Pick<Person, "age">`
- While Kysely provides great DX for complex queries without losing type-safety, unable to jump to definition from the result.
  - Kysely defines a result type on-demand.

https://github.com/user-attachments/assets/9036870e-090e-4f07-976b-3b569accff92
