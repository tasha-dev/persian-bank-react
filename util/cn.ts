// Codes by mahdi tasha
// Importing part
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// Creating and exporting famous cn function to append class names to gether
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
