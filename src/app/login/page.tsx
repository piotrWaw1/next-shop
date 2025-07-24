"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login">E-mail</Label>
            <Input id="login" type="text" placeholder="Enter your login" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required/>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="w-full flex justify-center">
            <Link className="underline text-sm font-semibold" href="/register">You don&apos;t have account. Sign in.</Link>
          </div>
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