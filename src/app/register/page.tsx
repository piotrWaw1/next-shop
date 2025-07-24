"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType, object, string } from "yup";

const signUpForm = object({
  email: string().email().required(),
  password: string().required(),
  repeatPassword: string().required(),
})

export type SignUpFormRequest = InferType<typeof signUpForm>

export default function RegisterPage() {
  const defaultValues = {
    email: "",
    password: "",
    repeatPassword: "",
  }
  const form = useForm<SignUpFormRequest>({
    resolver: yupResolver(signUpForm),
    defaultValues,
    mode: "onTouched",
  })

  const onSubmit = form.handleSubmit(async (requestData: SignUpFormRequest) => {
    console.log(requestData)
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign up</CardTitle>
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
              <FormField
                name={"repeatPassword"}
                render={({ field }) => (
                  <FormItem className="pb-4">
                    <FormLabel>Repeat password</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Sign up
              </Button>
            </form>
          </Form>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="border w-full"/>
            <div className="px-5">Or</div>
            <div className="border w-full"/>
          </div>
          <Button className="w-full" variant="outline">
            <Image src="google.svg" width={22} height={22} alt="Google"/>
            Continue with Google
          </Button>
          <Button className="w-full" variant="outline">
            <Image src="facebook.svg" width={22} height={22} alt="Google"/>
            Continue with Facebook
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}