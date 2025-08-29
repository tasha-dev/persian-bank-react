// Codes by mahdi tasha
// Importing part
import { HTMLAttributes } from "react";

// Exporting type for banking things
export type BankNameType =
  | "ayandeh"
  | "markazi"
  | "blue"
  | "caspian"
  | "dey"
  | "eghtesaade-novin"
  | "future"
  | "gardeshgari"
  | "iran-europe"
  | "iran-venezuela"
  | "iran-zamin"
  | "karafarin"
  | "keshavarzi"
  | "khavar-mianeh"
  | "maskan"
  | "mehr-iran"
  | "melall"
  | "mellat"
  | "melli"
  | "noor"
  | "parsian"
  | "pasargad"
  | "post"
  | "refah"
  | "resalat"
  | "saderat"
  | "saman"
  | "sanat-madan"
  | "sarmayeh"
  | "sepah"
  | "shahr"
  | "sina"
  | "standard-chartered"
  | "taavon-eslami"
  | "tejarat"
  | "tosee"
  | "tosee-sedarat"
  | "tossee-taavon"
  | "kosar"
  | "mehr-eghtesaad"
  | "ghavamin"
  | "hekmat"
  | "ansar"
  | "unknown";

export interface BankIconPropsType extends HTMLAttributes<SVGElement> {
  name: BankNameType;
  isColored?: boolean;
}

export interface BankInfo {
  type: BankNameType;
  name: string;
}
