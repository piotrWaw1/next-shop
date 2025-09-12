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
          <CardTitle className="text-2xl font-bold text-center">
            Login
            <ModeToggle/>
          </CardTitle>
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