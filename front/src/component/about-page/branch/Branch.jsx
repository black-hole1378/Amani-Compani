import React from "react";
import { useSelector } from "react-redux";
import EnglishBranch from "./EnglishBranch";
import PersianBranch from "./PersianBranch";
export default function Branch({ data }) {
  const { language } = useSelector((state) => state.lan);
  switch (language) {
    case "English":
      return <EnglishBranch data={data} />;
    case "Persian":
      return <PersianBranch data={data} />;
  }
}
