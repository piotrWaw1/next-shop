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

  const products: typeof productsTable.$inferInsert[] = [
    {
      "title": "Ultra HD Smart TV",
      "description": "65-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 899.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "55-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 699.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "75-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1199.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "50-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 599.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "85-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1999.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "60-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 799.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "70-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 999.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "58-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 749.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "48-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 549.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "80-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "52-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 649.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "63-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 849.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "40-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 449.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "90-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "43-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 479.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "77-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "49-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 579.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "68-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 899.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "45-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "82-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1799.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "54-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 699.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "59-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 759.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "47-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 529.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "72-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1099.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "56-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 729.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "64-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 879.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "42-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 469.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "78-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1299.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "51-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 629.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "67-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 929.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "44-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 489.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "83-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1899.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "53-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 679.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "61-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 819.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "46-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 519.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "79-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "57-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 739.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "66-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 909.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "41-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 459.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "84-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1999.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "62-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 839.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "69-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 949.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "71-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1049.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "73-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1149.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "74-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1199.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "76-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1249.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "81-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 1699.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "86-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2199.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "87-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2299.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "88-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "89-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "91-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2599.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "92-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2699.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "93-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2799.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "94-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2899.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "95-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 2999.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "96-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3099.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "97-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3199.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "98-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3299.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "99-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "100-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "32-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "33-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 419.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "34-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 439.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "35-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 459.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "36-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 479.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "37-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "38-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 519.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "39-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 539.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "101-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3599.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "102-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3699.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "103-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3799.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "104-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3899.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "105-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 3999.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "106-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4099.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "107-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4199.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "108-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4299.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "109-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "110-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "111-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4599.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "112-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4699.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "113-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4799.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "114-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4899.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "115-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 4999.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "116-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5099.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "117-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5199.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "118-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5299.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "119-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "120-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5499.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "121-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5599.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "122-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5699.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "123-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5799.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "124-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5899.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "125-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 5999.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "126-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 6099.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "127-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 6199.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "128-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 6299.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "129-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 6399.99
    },
    {
      "title": "Ultra HD Smart TV",
      "description": "130-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 6499.99
    }
  ];

  // await db.insert(usersTable).values(user);
  for (const product of products) {
    await db.insert(productsTable).values(product);
  }

  const users = await db.select().from(productsTable);
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

main().then();


//  npx tsx src/index.ts