"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType, object, string } from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/submit-button/submitButton";
import { useState } from "react";

const loginForm = object({
  email: string().email().required(),
  password: string().required(),
})
export type LoginFormRequest = InferType<typeof loginForm>

export function LoginForm() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState<boolean>(true);

  const defaultValues = {
    email: "",
    password: "",
  }
  const form = useForm<LoginFormRequest>({
    resolver: yupResolver(loginForm),
    defaultValues,
    mode: "onTouched",
  })

  const onSubmit = form.handleSubmit(async (requestData: LoginFormRequest) => {
    const response = await signIn('credentials', {
      email: requestData.email,
      password: requestData.password,
      redirect: false
    });

    if (response?.ok) {
      router.push("/");
      router.refresh();
    }
    else{
      setIsSuccess(false)
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
        <SubmitButton className="w-full">
          Login
        </SubmitButton>
        {isSuccess || <p className="mt-2 text-destructive text-sm">Incorrect email or password</p>}
      </form>
    </Form>
  )
}