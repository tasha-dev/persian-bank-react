// Codes by mahdi tasha
// Importing part
import CreditCardForm from "@/components/creditCardForm";
import Link from "next/link";
import { ReactNode } from "react";

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
        <CreditCardForm />
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
