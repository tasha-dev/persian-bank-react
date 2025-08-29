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
  });

  // Defining submit event
  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
  };

  // Defining variables
  const creditCard = form.watch("creditCardNumber");

  // Returning JSX
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action="#"
        className="space-y-3 mx-auto p-3 rounded-lg lg:max-w-[500px]"
      >
        <FormField
          control={form.control}
          name="creditCardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credit Card (Iranian) :</FormLabel>
              <FormControl>
                <Input {...field} placeholder="0000000000000000" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer">
          Submit
        </Button>
      </form>
    </Form>
  );
}
