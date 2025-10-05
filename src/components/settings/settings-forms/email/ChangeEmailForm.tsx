'use client'

import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React, { useActionState } from "react";
import { InferType, object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "@/components/submit-button/submitButton";
import { changeEmail } from "@/components/settings/settings-forms/email/actions";

const changeEmailFrom = object({
  newEmail: string().email().required(),
  password: string().required()
})

type ChangeEmailFromRequest = InferType<typeof changeEmailFrom>;

export function ChangeEmailForm() {

  const [state, formAction, isPending] = useActionState(changeEmail, undefined);

  const form = useForm<ChangeEmailFromRequest>({
    resolver: yupResolver(changeEmailFrom),
    defaultValues: {
      newEmail: "",
      password: "",
    },
    mode: "onTouched",
  })

  return (
    <TabsContent value="email" className="space-y-4 mt-6">
      <Form {...form}>
        <form action={formAction} className="space-y-2">
          <FormField
            name={"newEmail"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Enter new email" required/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name={"password"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="Enter your password" required/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <SubmitButton isActionPending={isPending} className="w-full" disabled={!form.formState.isValid}>
            Change Email
          </SubmitButton>
          {state?.message && <p className="mt-2 text-destructive">{state.message}</p>}
        </form>
      </Form>
    </TabsContent>
  )
}