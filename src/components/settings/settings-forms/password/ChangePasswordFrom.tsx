'use client'

import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import React, { useActionState } from "react";
import { InferType, object, ref, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { changePassword } from "@/components/settings/settings-forms/password/actions";
import SubmitButton from "@/components/submit-button/submitButton";

const changePasswordFrom = object({
  currentPassword: string().required(),
  newPassword: string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[^\s]{8,}$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character"
    )
    .required("Password is required"),
  confirmPassword: string()
    .required('Please repeat your password')
    .oneOf([ref('newPassword')], 'Passwords must match'),
})

type ChangePasswordFromRequest = InferType<typeof changePasswordFrom>;

export function ChangePasswordFrom() {
  const [state, formAction, isPending] = useActionState(changePassword, undefined)

  const form = useForm<ChangePasswordFromRequest>({
    resolver: yupResolver(changePasswordFrom),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  })

  return (
    <TabsContent value="password" className="mt-6">
      <Form {...form}>
        <form action={formAction} className="space-y-2">
          <FormField
            name={"currentPassword"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="Enter current password" required/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name={"newPassword"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="Enter new password" required/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name={"confirmPassword"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="Confirm new password" required/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <SubmitButton isActionPending={isPending} className="w-full" disabled={!form.formState.isValid}>
            Change Password
          </SubmitButton>
          {state?.message && <p className="mt-2 text-destructive">{state.message}</p>}
        </form>
      </Form>

    </TabsContent>
  )
}