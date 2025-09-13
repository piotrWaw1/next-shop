import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AltLoginButtons from "@/components/AltLoginButtons";
import { RegisterFrom } from "@/app/(without-navbar)/register/registerFrom";
import { ModeToggle } from "@/components/theme/ModeToggle";

export default function RegisterPage() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="relative flex items-center justify-center">
            <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
            <div className="absolute right-0">
              <ModeToggle/>
            </div>
          </div>
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