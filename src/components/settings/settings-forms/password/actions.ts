"use server"

export async function changePassword(state: any, formData: FormData) {
  console.log(formData)
  return { message: "Test" }
}