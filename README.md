# Persian Banking Utilities for React

A set of utility functions and React components to easily access information and icons of the Persian banking system.  
Useful for displaying bank names, logos, card BIN details, and more in your React projects.

---

## ✨ Features

- Get bank info by card number and Iban (BIN detection).
- Ready-to-use React components for showing bank logo.
- TypeScript support.
- Lightweight and easy to use.
- Supports Persian banks.

---

## 📦 Usage

The main scripts of this repo is in :

- `/components/ui/bankIcon.tsx`
- `/components/lib/bankUtils.ts`
- `/components/type/bankType.ts`

so you Should grab the content of this files and paste them into where ever you want in your project.

---

## 🚀 Usage

### Get Bank Info by Card Number

```tsx
import { getBankFromCard, getBankFromSheba } from "persian-bank-utils-react";

const cardNumber = "6037991234567890";
const sheba = "120170000000000000000000";

const bankInfo = getBankFromCard(cardNumber);
const shebaInfo = getBankFromSheba(cardNumber);

console.log(bankInfo);
// { name: "بانک ملی ایران", type: "meli" }

console.log(shebaInfo);
// { name: "بانک ملی ایران", type: "meli" }
```

### React Component Example

```tsx
import { BankIcon } from "persian-bank-utils-react";

export default function Example() {
  return (
    <div>
      <BankIcon name="meli" />
    </div>
  );
}
```

---

## 📚 API

### `getBankFromCard(cardNumber: string)` & `getBankFromSheba(cardNumber: string)`

Returns:

```ts
{
  name: string; // Persian bank name
  type: string; // Bank code identifier
}
```

### `<BankIcon />`

Props:

- `name: BankNameType` → Name of the bank to return icon
- and Other SVG props

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or an issue.
