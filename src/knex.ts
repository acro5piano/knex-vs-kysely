import createKnex from 'knex'

type Person = {
  id: number
  name: string
  age: number
}

declare module 'knex/types/tables' {
  interface Tables {
    person: Person
  }
}

const db = createKnex({
  client: 'better-sqlite3',
  connection: {
    filename: ':memory:',
  },
})

export async function findUsers() {
  const person = await db('person')
    .select('age')
    .where('age', '>', 5)
    .orderBy('age', 'desc')
    .first()
  if (person) {
    person.age
  }
}
