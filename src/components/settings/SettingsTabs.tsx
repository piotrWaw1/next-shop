import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChangePasswordFrom } from "@/components/settings/settings-forms/password/ChangePasswordFrom";
import { ChangeEmailForm } from "@/components/settings/settings-forms/email/ChangeEmailForm";
import { SellerForm } from "@/components/settings/settings-forms/seller-status/SellerForm";

export default function SettingsTabs() {

  return (
    <div className="flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardContent>
          <Tabs defaultValue="password" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="seller">Seller</TabsTrigger>
            </TabsList>
            <ChangePasswordFrom/>
            <ChangeEmailForm/>
            <SellerForm/>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
