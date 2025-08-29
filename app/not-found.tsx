// Codes by mahdi tasha
// Importing part
import Link from "next/link";
import { ReactNode } from "react";

// Creating and exporting NotFouncPage as default
export default function NotFouncPage(): ReactNode {
  // Returning JSX
  return (
    <section>
      <main>
        <h1 className="mb-10 lg:text-center text-left">
          The page you are looking for is not found !
        </h1>
        <div className="flex items-center gap-3">
          <Link href="/">Go Back</Link>
          <Link href="https://tasha.vercel.app">By Mahdi Tasha</Link>
        </div>
      </main>
    </section>
  );
}
