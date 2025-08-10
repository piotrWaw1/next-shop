"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType, object, ref, string } from "yup";
import SubmitButton from "@/components/submitButton/submitButton";
import { redirect } from "next/navigation";
import { useState } from "react";

const registerForm = object({
  email: string().email().required(),
  password: string().required(),
  repeatPassword: string()
    .required('Please repeat your password')
    .oneOf([ref('password')], 'Passwords must match'),
})

export type RegisterFormRequest = InferType<typeof registerForm>

export function RegisterFrom() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const defaultValues = {
    email: "",
    password: "",
    repeatPassword: "",
  }
  const form = useForm<RegisterFormRequest>({
    resolver: yupResolver(registerForm),
    defaultValues,
    mode: "onTouched",
  })

  const onSubmit = form.handleSubmit(async (requestData: RegisterFormRequest) => {
    const response = await fetch('/api/auth/register', {
      method: "POST",
      body: JSON.stringify(requestData),
    })
    const {message} = await response.json();

    if (response.ok) {
      redirect("/login")
    }
    if (response.status >= 400){
      setErrorMessage(message)
    }

  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <FormField
          name={"email"}
          render={({ field }) => (
            <FormItem className="pb-3">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} type="email"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          name={"password"}
          render={({ field }) => (
            <FormItem className="pb-4">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          name={"repeatPassword"}
          render={({ field }) => (
            <FormItem className="pb-4">
              <FormLabel>Repeat password</FormLabel>
              <FormControl>
                <Input {...field} type="password"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        {errorMessage && <p className="mb-2 text-red-600 font-bold">{errorMessage}</p>}
        <SubmitButton className="w-full">
          Sign up
        </SubmitButton>
      </form>
    </Form>
  )
}