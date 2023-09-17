import React, { useRef } from "react";
import { useSelector } from "react-redux";
import PersianFormBox from "./PersianFormBox";
import EnglishFormBox from "./EnglishFormBox";
import ChineseFormBox from "./ChineseFormBox";
const FormBox = ({ setOpen, setCode }) => {
  const { language } = useSelector((state) => state.lan);
  switch (language) {
    case "Persian":
      return <PersianFormBox setCode={setCode} setOpen={setOpen} />;
    case "English":
      return <EnglishFormBox setOpen={setOpen} setCode={setCode} />;
    case "Chinese":
      return <ChineseFormBox setOpen={setOpen} setCode={setCode} />;
  }
};

export default FormBox;
