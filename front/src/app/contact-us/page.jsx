"use client";
import { Box } from "@mui/material";
import React from "react";
import style from "../../style/contact_us.module.css";
import { useSelector } from "react-redux";
import Content from "@/component/contact-us/Content/Content";
export default function Page() {
  const { language } = useSelector((state) => state.lan);
  return (
    <Box className={style.container}>
      <Box className={style.contact_container}>
        <Box
          p={6}
          display={"flex"}
          flexDirection={{
            md: language == "Persian" ? "row-reverse" : "row",
            xs: "column",
          }}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Content />
          <img src="/logo.png" className={style.img} />
        </Box>
      </Box>
    </Box>
  );
}
