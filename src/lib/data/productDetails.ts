import { db } from "@/lib/drizzleDbConnection";
import { productsTable } from "@/db/schema/schema";
import { eq } from "drizzle-orm";

export async function getProductInformation(productId: string) {
  const data = await db.select().from(productsTable).where(eq(productsTable.id, Number(productId))).limit(1);
  return data[0];
}