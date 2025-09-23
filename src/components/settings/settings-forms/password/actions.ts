"use server"

import { object, string, ValidationError } from "yup";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SessionData } from "@/components/profile/ProfileButtons";
import { db } from "@/lib/drizzleDbConnection";
import { usersTable } from "@/db/schema/schema";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";
import { validatePassword } from "@/lib/validatePassword";
import { eq } from "drizzle-orm";

const changePasswordFormSchema = object({
  currentPassword: string().required(),
  newPassword: string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[^\s]{8,}$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character"
    )
    .required("Password is required"),
})

export async function changePassword(state: any, formData: FormData) {
  const session: SessionData | null = await getServerSession(authOptions);

  if (!session) {
    return { message: "Invalid session" }
  }

  const data = {
    currentPassword: formData.get("currentPassword") as string,
    newPassword: formData.get("newPassword") as string,
  }

  try {
    await changePasswordFormSchema.validate(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof ValidationError) {
      return { message: error.errors.join(", ") };
    }
    return { message: "Invalid data provided." };
  }

  const isPasswordCorrect = await validatePassword(session.user.id, data.currentPassword);
  if (!isPasswordCorrect) {
    return { message: "Invalid current password" };
  }

  const hashedNewPassword = await hash(data.newPassword, 10);
  await db.update(usersTable).set({ password: hashedNewPassword }).where(eq(usersTable.id, session.user.id));

  redirect("/profile");
}