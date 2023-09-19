import React from "react";
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { Heading } from "../page/Title/TittleStyle";
import style from "../../style/order.module.css";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "400" });

const english = "Your request has been successfully registered!";
const persian = "درخواست شما با موافقیت ثبت شد!";
const chinese = "您的请求已成功注册";

const Request = ({ content, dir }) => {
  return (
    <Paper sx={{ p: 4 }} className={style.content}>
      <Heading textAlign={"center"} dir={dir} className={pt_sans.className}>
        {content}
      </Heading>
    </Paper>
  );
};

export default function Content() {
  const { language } = useSelector((state) => state.lan);
  switch (language) {
    case "English":
      return <Request content={english} dir={"ltr"} />;
    case "Persian":
      return <Request content={persian} dir={"rtl"} />;
    case "Chinese":
      return <Request content={chinese} dir={"ltr"} />;
  }
}
