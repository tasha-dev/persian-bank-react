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
import { getShebaInfo, isShebaValid } from "@persian-tools/persian-tools";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import BankIcon from "./ui/bankIcon";
import { getBankFromSheba } from "@/lib/bankUtils";
import { toast } from "sonner";
import Link from "next/link";

// Defining form schema
const formSchema = z.object({
  sheba: z.string().refine((val) => isShebaValid(val), {
    message: "The iranian sheba is not valid",
  }),
});

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting ShebaForm component as default
export default function ShebaForm(): ReactNode {
  // Defining hooks
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sheba: "000000000000000000000000",
    },
  });

  // Defining submit event
  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
    toast("Date has been logged to your console !");
  };

  // Defining variables
  const sheba = form.watch("sheba");
  const bankInfo = getBankFromSheba(`IR${sheba}`);
  const shebaInfo = getShebaInfo(`IR${sheba}`);

  // Returning JSX
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action="#"
        className="mx-auto p-3 rounded-lg lg:max-w-[500px]"
      >
        {form.formState.isValid && (
          <ul className="flex flex-col gap-3 mb-10">
            <li>
              These infos are from{" "}
              <Link href="https://www.npmjs.com/package/@persian-tools/persian-tools#iranian-shebaiban">
                Persian tools package
              </Link>
            </li>
            <li>Nick name : {shebaInfo?.nickname || "-"}</li>
            <li>Name : {shebaInfo?.name || "-"}</li>
            <li>Persian Name : {shebaInfo?.persianName || "-"}</li>
            <li>Code name : {shebaInfo?.code || "-"}</li>
            <li>
              Account number available :{" "}
              {`${shebaInfo?.accountNumberAvailable}`}
            </li>
            <li>Account number : {shebaInfo?.accountNumber || "-"}</li>
            <li>
              Formatted Account Number :{" "}
              {shebaInfo?.formattedAccountNumber || "-"}
            </li>
          </ul>
        )}
        <div className="flex items-center justify-start gap-3 mb-5">
          <BankIcon name={bankInfo?.type || "unknown"} className="size-10" />
          <div className="flex-1">
            <span className="text-sm">{bankInfo?.name || "Unknown"}</span>
          </div>
        </div>
        <FormField
          control={form.control}
          name="sheba"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3">Sheba - iban (Iranian) :</FormLabel>
              <FormControl>
                <div className="flex justify-between gap-3">
                  <div className="size-[36px] flex justify-center items-center bg-foreground text-background rounded-sm shrink-0">
                    <span className="text-sm font-bold uppercase text-center block truncate">
                      IR
                    </span>
                  </div>
                  <Input
                    {...field}
                    placeholder="000000000000000000000000"
                    className="flex-1 w-full"
                  />
                </div>
              </FormControl>
              <FormMessage className="mt-3" />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer mt-10">
          Submit (Results in console)
        </Button>
      </form>
    </Form>
  );
}
