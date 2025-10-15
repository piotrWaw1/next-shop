import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
// import { sql } from "drizzle-orm";
// import { eq } from 'drizzle-orm';
import {
  cartsTable,
  productsCategoryTable,
  productsImageTable,
  productsTable,
  User,
  usersTable
} from './db/schema/schema';
import { sql } from "drizzle-orm";
import { categories, products } from "@/exampleData";
import { hash } from "bcrypt";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {

  const hashPassword = await hash('Password123!@#', 10)

  const adminUser: Omit<User, "id"> = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: hashPassword,
    admin: true,
  };

  // await db.insert(usersTable).values(adminUser);
  // console.log(await db.select().from(usersTable))

  // fill categories table
  // for (const category of categories) {
  //   await db.insert(productsCategoryTable).values(category);
  // }
  // console.log("Categories done!")

  // fill products table
  // for (const product of products) {
  //   await db.insert(productsTable).values(product);
  // }
  // console.log("Products done!")

  console.log(await db.select().from(productsTable))

  // const existingCategories = await db.select().from(productsCategoryTable);
  // console.log('Existing categories:', existingCategories);

  // const users = await db.select().from(usersTable);
  // console.log('Getting all users from the database: ', users)

  // clear tables
  // await db.delete(usersTable)
  // await db.delete(productsTable)
  // await db.delete(productsImageTable)
  // await db.delete(productsCategoryTable)

  // delete tables
  // const delete1 = await db.execute(sql`DROP TABLE IF EXISTS products CASCADE;`)
  // const delete2 = await db.execute(sql`DROP TABLE IF EXISTS users CASCADE;`)
  // const delete3 = await db.execute(sql`DROP TABLE IF EXISTS products_images CASCADE;`)
  // const delete4 = await db.execute(sql`DROP TABLE IF EXISTS products_categories CASCADE;`)
  // const delete5 = await db.execute(sql`DROP TABLE IF EXISTS carts CASCADE;`)
  // console.log(delete1)
  // console.log(delete2)
  // console.log(delete3)
  // console.log(delete4)

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

main().then();


//  npx tsx src/index.ts