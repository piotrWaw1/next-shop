"use client"

import { TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import { InferType, object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { sellerStatus } from "@/components/settings/settings-forms/seller-status/actions";
import SubmitButton from "@/components/submit-button/submitButton";

const sellerStatusFormSchema = object({
  businessName: string().max(255).required(),
  businessDescription: string().max(255).required(),
  businessAddress: string().max(255).required(),
  taxId: string()
    .required("Tax ID is required")
    .matches(/^[0-9]{9,15}$/, "Tax ID must be 9–15 digits"),
});

type SellerStatusFromRequest = InferType<typeof sellerStatusFormSchema>;


export function SellerForm() {
  const [state, formAction, isPending] = useActionState(sellerStatus, undefined)

  const form = useForm<SellerStatusFromRequest>({
    resolver: yupResolver(sellerStatusFormSchema),
    defaultValues: {
      businessName: "",
      businessDescription: "",
      businessAddress: "",
      taxId: ""
    },
    mode: "onTouched",
  })

  return (
    <TabsContent value="seller" className="mt-6">
      <Form {...form}>
        <form action={formAction} className="space-y-2">
          <FormField
            name={"businessName"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your business name" required/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name={"businessDescription"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Business Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    id="businessDescription"
                    name="businessDescription"
                    placeholder="Describe your business"
                    rows={3}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name={"businessAddress"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Business Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter business address" required/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name={"taxId"}
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Tax ID (Optional)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter tax identification number"/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <SubmitButton isActionPending={isPending} className="w-full" disabled={!form.formState.isValid}>
            Register as Seller
          </SubmitButton>
          {state?.message && <p className="mt-2 text-destructive">{state.message}</p>}
        </form>
      </Form>
    </TabsContent>
  )
}