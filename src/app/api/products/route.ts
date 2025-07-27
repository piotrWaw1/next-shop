import { NextResponse } from "next/server";
import { productsTable } from "@/db/schema/schema";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(process.env.DATABASE_URL!);

export async function GET() {
  const products = await db.select().from(productsTable);
  console.log(products);
  return NextResponse.json(products)
}