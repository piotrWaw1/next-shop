import { NextResponse } from "next/server";
import { hash } from 'bcrypt'
import { usersTable } from "@/db/schema/schema";
import { db } from "@/lib/drizzleDbConnection";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //TODO: validate email and password

    const user = await db.select().from(usersTable).where(eq(usersTable.email, email));
    console.log(user.length > 0)
    if (user.length > 0) {
      return NextResponse.json({ message: 'User already exists.' }, { status: 409 });
    }

    const hashedPassword = await hash(password, 10);
    await db.insert(usersTable).values({ email: email, password: hashedPassword });
    return NextResponse.json({ message: 'User created successfully.' });
  } catch (e) {
    return NextResponse.json({ message: 'Bad request.' }, { status: 400 });
  }
}