import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AltLoginButtons from "@/components/AltLoginButtons";
import { RegisterFrom } from "@/app/(without-navbar)/register/registerFrom";

export default function RegisterPage() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign up</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RegisterFrom/>
          <AltLoginButtons/>
        </CardContent>
      </Card>
    </div>
  )
}