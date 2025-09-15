"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType, object, ref, string } from "yup";
import SubmitButton from "@/components/submitButton/submitButton";
import { registerUser } from "@/app/(without-navbar)/register/actions";
import { useActionState } from "react";

const registerForm = object({
  email: string().email().required(),
  password: string().required(),
  repeatPassword: string()
    .required('Please repeat your password')
    .oneOf([ref('password')], 'Passwords must match'),
})

export type RegisterFormRequest = InferType<typeof registerForm>

export function RegisterFrom() {
  const [state, formAction] = useActionState(registerUser, undefined);

  const form = useForm<RegisterFormRequest>({
    resolver: yupResolver(registerForm),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onTouched",
  })

  return (
    <Form {...form}>
      <form action={formAction}>
        <FormField
          name={"email"}
          control={form.control}
          render={({ field }) => (
            <FormItem className="pb-4">
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
          control={form.control}
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
          control={form.control}
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
        <SubmitButton className="w-full">
          Sign up
        </SubmitButton>
        {state?.message && <p className="mt-2 text-destructive">{state.message}</p>}
      </form>
    </Form>
  )
}