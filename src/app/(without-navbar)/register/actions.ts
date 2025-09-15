"use server"

import { redirect } from "next/navigation"
import { object, string, ValidationError } from "yup";
import { db } from "@/lib/drizzleDbConnection";
import { usersTable } from "@/db/schema/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcrypt";

const registerFormSchema = object({
  email: string().email().required(),
  password: string().min(8).required(),
});

export async function registerUser(state: any, formData: FormData) {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  try {
    await registerFormSchema.validate(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.errors)
      return { message: error.errors.join(", ")};
    }
    return { message: "Invalid data provided." };
  }

  const user = await db.select().from(usersTable).where(eq(usersTable.email, data.email));
  if (user.length > 0) {
    return { message: 'User already exists.' }
  }

  const hashedPassword = await hash(data.password, 10);
  await db.insert(usersTable).values({ email: data.email, password: hashedPassword });

  redirect("/login");
}