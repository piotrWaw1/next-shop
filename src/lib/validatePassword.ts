import { db } from "@/lib/drizzleDbConnection";
import { usersTable } from "@/db/schema/schema";
import { eq } from "drizzle-orm";
import { compare } from "bcrypt";

export async function validatePassword(userId: number, password: string) {
  const user = await db.select().from(usersTable).where(eq(usersTable.id, userId));
  return await compare(password, user[0].password);
}