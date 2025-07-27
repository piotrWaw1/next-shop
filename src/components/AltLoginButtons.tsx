import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AltLoginButtons() {
  return (
    <>
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
    </>
  )
}