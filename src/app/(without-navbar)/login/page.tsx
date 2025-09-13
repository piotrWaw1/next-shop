import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import AltLoginButtons from "@/components/AltLoginButtons";
import { LoginForm } from "@/app/(without-navbar)/login/loginForm";
import { ModeToggle } from "@/components/theme/ModeToggle";

export default function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="relative flex items-center justify-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <div className="absolute right-0">
              <ModeToggle/>
            </div>
          </div>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm/>
          <div className="w-full flex justify-center">
            <Link className="underline text-sm font-semibold" href="/register">
              You don&apos;t have account? Sign in
            </Link>
          </div>
          <AltLoginButtons/>
        </CardContent>
      </Card>
    </div>
  )
}