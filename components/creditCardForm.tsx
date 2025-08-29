// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ReactNode } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { verifyCardNumber } from "@persian-tools/persian-tools";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import BankIcon from "./ui/bankIcon";
import { getBankFromCard } from "@/lib/bankUtils";

// Defining form schema
const formSchema = z.object({
  creditCardNumber: z.string().refine((val) => verifyCardNumber(Number(val)), {
    message: "The iranian credit card is not valid",
  }),
});

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting CreditCardForm component as default
export default function CreditCardForm(): ReactNode {
  // Defining hooks
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      creditCardNumber: "0000000000000000",
    },
  });

  // Defining submit event
  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
  };

  // Defining variables
  const creditCardBin = form.watch("creditCardNumber").slice(0, 6);
  const bankInfo = getBankFromCard(creditCardBin);

  // Returning JSX
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action="#"
        className="mx-auto p-3 rounded-lg lg:max-w-[500px]"
      >
        <div className="flex items-center justify-start gap-3 mb-5">
          <BankIcon name={bankInfo?.type || "unknown"} className="size-10" />
          <div className="flex-1">
            <span className="text-sm">{bankInfo?.name || "Unknown"}</span>
          </div>
        </div>
        <FormField
          control={form.control}
          name="creditCardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3">Credit Card (Iranian) :</FormLabel>
              <FormControl>
                <Input {...field} placeholder="0000000000000000" />
              </FormControl>
              <FormMessage className="mt-3" />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer mt-10">
          Submit
        </Button>
      </form>
    </Form>
  );
}
