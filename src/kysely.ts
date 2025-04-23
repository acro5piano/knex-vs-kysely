import { Kysely, SqliteDialect } from 'kysely'
import SQLite from 'better-sqlite3'

type Person = {
  id: number
  name: string
  age: number
}

type Database = {
  person: Person
}

const dialect = new SqliteDialect({
  database: new SQLite(':memory:'),
})

const db = new Kysely<Database>({ dialect })

export async function findUsers() {
  const person = await db
    .selectFrom('person')
    .selectAll()
    .where('age', '>', 5)
    .orderBy('age', 'desc')
    .executeTakeFirstOrThrow()
  person.age
}
