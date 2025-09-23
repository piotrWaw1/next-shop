"use server"


import { SessionData } from "@/components/profile/ProfileButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { validatePassword } from "@/lib/validatePassword";
import { object, string, ValidationError } from "yup";
import { usersTable } from "@/db/schema/schema";
import { db } from "@/lib/drizzleDbConnection";
import { eq } from "drizzle-orm";

const changeEmailFrom = object({
  newEmail: string().email().required(),
  password: string().required()
})

export async function changeEmail(state: any, formData: FormData) {
  const session: SessionData | null = await getServerSession(authOptions);

  if (!session) {
    return { message: "Invalid session" }
  }

  const data = {
    newEmail: formData.get("newEmail") as string,
    password: formData.get("password") as string,
  }

  try {
    await changeEmailFrom.validate(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof ValidationError) {
      return { message: error.errors.join(", ") };
    }
    return { message: "Invalid data provided." };
  }

  const isPasswordCorrect = await validatePassword(session.user.id, data.password);
  if (!isPasswordCorrect) {
    return { message: "Invalid password" };
  }

  await db.update(usersTable).set({ email: data.newEmail }).where(eq(usersTable.id, session.user.id));

  return {}
}