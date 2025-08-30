// Codes by mahdi tasha
// Importing part
import { BankInfo } from "@/type/bankType";

// Defining utilitys for banking things
const binToBank: Record<string, BankInfo> = {
  "636795": { type: "markazi", name: "اداره معاملات ریالی بانک مرکزی" },
  "627961": { type: "sanat-madan", name: "بانک صنعت و معدن" },
  "610433": { type: "mellat", name: "بانک ملت" },
  "589463": { type: "refah", name: "بانک رفاه کارگران" },
  "628023": { type: "maskan", name: "بانک مسکن" },
  "589210": { type: "sepah", name: "بانک سپه" },
  "603770": { type: "keshavarzi", name: "بانک کشاورزی" },
  "603799": { type: "melli", name: "بانک ملی ایران" },
  "627353": { type: "tejarat", name: "بانک تجارت" },
  "603769": { type: "saderat", name: "بانک صادرات ایران" },
  "627648": { type: "tosee-sedarat", name: "بانک توسعه صادرات ایران" },
  "627760": { type: "post", name: "پست بانک" },
  "502908": { type: "taavon-eslami", name: "بانک توسعه تعاون" },
  "628157": { type: "tosee", name: "مؤسسه اعتباری توسعه" },
  "627488": { type: "karafarin", name: "بانک کارآفرین" },
  "622106": { type: "parsian", name: "بانک پارسیان" },
  "627412": { type: "eghtesaade-novin", name: "بانک اقتصاد نوین" },
  "621986": { type: "saman", name: "بانک سامان" },
  "502229": { type: "pasargad", name: "بانک پاسارگاد" },
  "639607": { type: "sarmayeh", name: "بانک سرمایه" },
  "639346": { type: "sina", name: "بانک سینا" },
  "606373": { type: "mehr-iran", name: "بانک قرض‌الحسنه مهر ایران" },
  "504706": { type: "shahr", name: "بانک شهر" },
  "636214": { type: "ayandeh", name: "بانک آینده" },
  "627381": { type: "ansar", name: "بانک انصار" },
  "505416": { type: "gardeshgari", name: "بانک گردشگری" },
  "636949": { type: "hekmat", name: "بانک حکمت ایرانیان" },
  "502938": { type: "dey", name: "بانک دی" },
  "505785": { type: "iran-zamin", name: "بانک ایران زمین" },
  "504172": { type: "resalat", name: "بانک قرض‌الحسنه رسالت" },
  "505809": { type: "khavar-mianeh", name: "بانک خاورمیانه" },
  "581874": { type: "iran-venezuela", name: "بانک ایران و ونزوئلا" },
  "639599": { type: "ghavamin", name: "بانک قوامین" },
  "505801": { type: "kosar", name: "مؤسسه مالی و اعتباری کوثر" },
  "507677": { type: "noor", name: "مؤسسه مالی و اعتباری نور" },
};

const shebaToBank: Record<string, BankInfo> = {
  "0100": { type: "markazi", name: "بانک مرکزی" },
  "0110": { type: "sanat-madan", name: "بانک صنعت و معدن" },
  "0120": { type: "mellat", name: "بانک ملت" },
  "0130": { type: "refah", name: "بانک رفاه کارگران" },
  "0140": { type: "maskan", name: "بانک مسکن" },
  "0150": { type: "sepah", name: "بانک سپه" },
  "0160": { type: "keshavarzi", name: "بانک کشاورزی" },
  "0170": { type: "melli", name: "بانک ملی ایران" },
  "0180": { type: "tejarat", name: "بانک تجارت" },
  "0190": { type: "saderat", name: "بانک صادرات ایران" },
  "0210": { type: "post", name: "پست‌بانک ایران" },
  "0220": { type: "taavon-eslami", name: "بانک توسعه تعاون" },
  "0510": { type: "tosee", name: "مؤسسه اعتباری توسعه" },
  "0520": { type: "ghavamin", name: "بانک قوامین" },
  "0530": { type: "karafarin", name: "بانک کارآفرین" },
  "0540": { type: "parsian", name: "بانک پارسیان" },
  "0550": { type: "eghtesaade-novin", name: "بانک اقتصاد نوین" },
  "0560": { type: "saman", name: "بانک سامان" },
  "0570": { type: "pasargad", name: "بانک پاسارگاد" },
  "0580": { type: "sarmayeh", name: "بانک سرمایه" },
  "0590": { type: "sina", name: "بانک سینا" },
  "0610": { type: "shahr", name: "بانک شهر" },
  "0620": { type: "ayandeh", name: "بانک آینده" },
  "0630": { type: "ansar", name: "بانک انصار" },
  "0640": { type: "gardeshgari", name: "بانک گردشگری" },
  "0650": { type: "hekmat", name: "بانک حکمت ایرانیان" },
  "0660": { type: "dey", name: "بانک دی" },
  "0690": { type: "iran-zamin", name: "بانک ایران‌زمین" },
  "0700": { type: "resalat", name: "بانک قرض‌الحسنه رسالت" },
  "0950": { type: "iran-venezuela", name: "بانک ایران و ونزوئلا" },
};

export function getBankFromCard(cardNumber: string | number): BankInfo | null {
  const cardStr = String(cardNumber).replace(/\D/g, "");
  if (cardStr.length < 6) return null;
  const bin = cardStr.slice(0, 6);
  return binToBank[bin] || null;
}

export function getBankFromSheba(
  sheba: string,
  useIR: boolean = false,
): BankInfo | null {
  const fixedSheba = sheba.replace(/\s+/g, "").toUpperCase();
  const shebaStr = useIR ? `IR${fixedSheba}` : fixedSheba;

  if (!/^IR\d{24}$/.test(shebaStr)) return null;

  const bankCode = shebaStr.slice(4, 8);
  return shebaToBank[bankCode] || null;
}
