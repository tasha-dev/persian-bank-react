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

## 📦 Installation

```bash
npm install persian-bank-react
# or
yarn add persian-bank-react
```

---

## 🚀 Usage

### Get Bank Info by Card Number

```tsx
import { getBankFromCard } from "persian-bank-utils-react";

const cardNumber = "6037991234567890";
const bankInfo = getBankFromCard(cardNumber);

console.log(bankInfo);
// { name: "بانک ملی ایران", type: "meli" }
```

### React Component Example

```tsx
import { BankIcon } from "persian-bank-utils-react";

export default function Example() {
  return (
    <div>
      <BankIcon name="meli" isColored={false} />
    </div>
  );
}
```

---

## 📚 API

### `getBankFromCard(cardNumber: string)`

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
- `isColored: boolean` → Using colors or black and white colors
- and Other SVG props

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or an issue.
