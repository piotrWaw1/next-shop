import { db } from "@/lib/drizzleDbConnection";
import { productsTable, shoppingCartTable } from "@/db/schema/schema";
import { eq } from "drizzle-orm";

export interface ShoppingCartData {
  id: number;
  title: string;
  amount: number;
}

export async function getShoppingCartByUserId(userId: number): Promise<ShoppingCartData[]> {
  return db.select(
    {
      id: shoppingCartTable.id,
      title: productsTable.title,
      amount: shoppingCartTable.amount
    })
    .from(shoppingCartTable)
    .innerJoin(productsTable, eq(productsTable.id, shoppingCartTable.productId))
    .where(eq(shoppingCartTable.userId, userId))
}