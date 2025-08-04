import { NextResponse } from "next/server";
import { hash } from 'bcrypt'
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "@/db/schema/schema";

const db = drizzle(process.env.DATABASE_URL!);

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //TODO: validate email and password
    console.log({ email, password });

    const hashedPassword = await hash(password, 10);
    await db.insert(usersTable).values({ email: email, password: hashedPassword });
    return NextResponse.json({ message: 'User created successfully.' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
  }

}