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
      title: "Ultra HD Smart TV",
      description: "65-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      price: 899.99,
    },
    {
      title: "Wireless Noise-Canceling Headphones",
      description: "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
      price: 349.99,
    },
    {
      title: "Ergonomic Office Chair",
      description: "Comfortable ergonomic chair with adjustable lumbar support and breathable mesh back.",
      price: 249.99,
    },
    {
      title: "Smartphone Pro Max",
      description: "Latest flagship smartphone with 6.7-inch OLED display and triple camera system.",
      price: 1099.99,
    },
    {
      title: "Electric Air Fryer",
      description: "5.8-quart digital air fryer with 7 cooking presets and rapid air circulation technology.",
      price: 129.99,
    },
    {
      title: "Fitness Tracker Watch",
      description: "Water-resistant fitness tracker with heart rate monitoring and 14-day battery life.",
      price: 79.99,
    },
    {
      title: "Robot Vacuum Cleaner",
      description: "Smart robot vacuum with laser navigation and self-emptying base.",
      price: 599.99,
    },
    {
      title: "Blender Pro 2000",
      description: "High-performance blender with 1500W motor and 8 preset programs for smoothies and soups.",
      price: 199.99,
    },
    {
      title: "Gaming Laptop",
      description: "Powerful gaming laptop with RTX graphics and 240Hz refresh rate display.",
      price: 1599.99,
    },
    {
      title: "Smart Thermostat",
      description: "Wi-Fi enabled smart thermostat that learns your schedule and saves energy.",
      price: 199.99,
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