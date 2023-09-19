import * as React from "react";
import EnglishTable from "./EnglishTable";
import PersianTable from "./PersianTable";
import ChineseTable from "./ChineseTable";
export default function ProductTable({ product, language }) {
  switch (language) {
    case "English":
      return <EnglishTable product={product} />;
    case "Persian":
      return <PersianTable product={product} />;
    case "Chinese":
      return <ChineseTable product={product} />;
  }
}
