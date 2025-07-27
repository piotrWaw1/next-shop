import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
// import { sql } from "drizzle-orm";
// import { eq } from 'drizzle-orm';
import { productsTable, usersTable } from './db/schema/schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: "XDDD123"
  };

  const product: typeof productsTable.$inferInsert = {
    title: "Super product",
    description: "Super product description. It is so supper.",
    price: 199.99,
  }

  await db.insert(usersTable).values(user);
  await db.insert(productsTable).values(product);
  console.log('New user created!')



  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)


  // const delete1 = await db.execute(sql`DROP TABLE IF EXISTS products CASCADE;`)
  // const delete2 = await db.execute(sql`DROP TABLE IF EXISTS users CASCADE;`)
  // const delete3 = await db.execute(sql`DROP TABLE IF EXISTS products_images CASCADE;`)
  // console.log(delete1)
  // console.log(delete2)
  // console.log(delete3)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  // await db
  //   .update(usersTable)
  //   .set({
  //     age: 31,
  //   })
  //   .where(eq(usersTable.email, user.email));
  // console.log('User info updated!')

  // await db.delete(usersTable).where(eq(usersTable.email, user.email));
  // console.log('User deleted!')
}

main();
