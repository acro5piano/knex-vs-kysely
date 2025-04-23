# knex-vs-kysely

"jump to definition" capability comparison for the two legendary libraries

- We can jump to definition from Knex result.
  - This is because it resolves original type, e.g., `Pick<Person, "age">`
- While Kysely provides great DX for complex queries without losing type-safety, unable to jump to definition from the result.
  - Kysely defines a result type on-demand.

# Knex

It resolved to a partial type of the original type.

![image](https://github.com/user-attachments/assets/5185c151-ea5e-4b21-8416-a1bf99f8cd41)

# Kysely

It resolves to an adhoc type.

![image](https://github.com/user-attachments/assets/c899314b-a961-4b9e-8252-ae13ee222521)


# Full Demo video

https://github.com/user-attachments/assets/9036870e-090e-4f07-976b-3b569accff92
