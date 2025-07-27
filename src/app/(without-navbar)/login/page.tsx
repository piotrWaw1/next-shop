"use client"

// TODO: Optimize

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { InferType, object, string } from "yup";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AltLoginButtons from "@/components/AltLoginButtons";

const loginForm = object({
  email: string().email().required(),
  password: string().required(),
})

export type LoginFormRequest = InferType<typeof loginForm>

export default function LoginPage() {
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
    console.log(requestData)
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <FormField
                name={"email"}
                render={({ field }) => (
                  <FormItem className="pb-3">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                      <Input {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
          <div className="w-full flex justify-center">
            <Link className="underline text-sm font-semibold" href="/register">You don&apos;t have account? Sign
              in</Link>
          </div>
          <AltLoginButtons/>
        </CardContent>
      </Card>
    </div>
  )
}