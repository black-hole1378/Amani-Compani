import React, { useRef } from "react";
import { useSelector } from "react-redux";
import PersianFormBox from "./PersianFormBox";
import EnglishFormBox from "./EnglishFormBox";
const FormBox = ({ setOpen, setCode }) => {
  const { language } = useSelector((state) => state.lan);
  if (language == "Persian")
    return <PersianFormBox setCode={setCode} setOpen={setOpen} />;
  else return <EnglishFormBox setOpen={setOpen} setCode={setCode} />;
};

export default FormBox;
