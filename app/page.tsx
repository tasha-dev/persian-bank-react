// Codes by mahdi tasha
// Importing part
import CreditCardForm from "@/components/creditCardForm";
import Link from "next/link";
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShebaForm from "@/components/shebaForm";

// Creating and exporting HomePage as default
export default function HomePage(): ReactNode {
  // Returning JSX
  return (
    <section>
      <main>
        <h1>Persian Bank (React)</h1>
        <p className="mb-8">
          A set of utility functions and components for react to get info and
          icon of the persian banking systems
        </p>
        <Tabs defaultValue="sheba">
          <TabsList className="mx-auto">
            <TabsTrigger value="creditCard">CreditCard</TabsTrigger>
            <TabsTrigger value="sheba">Sheba</TabsTrigger>
          </TabsList>
          <TabsContent value="creditCard">
            <CreditCardForm />
          </TabsContent>
          <TabsContent value="sheba">
            <ShebaForm />
          </TabsContent>
        </Tabs>
        <Link
          className="block mx-auto text-center w-fit mt-8"
          href="https://tasha.vercel.app"
        >
          By Mahdi Tasha
        </Link>
      </main>
    </section>
  );
}
