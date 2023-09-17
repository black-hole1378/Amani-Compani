"use client";
import { Box } from "@mui/material";
import React from "react";
import style from "../../style/about_us.module.css";
import { useSelector } from "react-redux";
import Content from "@/component/about-page/Content";
import Branches from "@/component/about-page/branch/Branches";
export default function Page() {
  const { language } = useSelector((state) => state.lan);
  return (
    <Box className={style.container}>
      <Box className={style.about_container}>
        <Box
          p={6}
          display={"flex"}
          flexDirection={{
            md: language === "Persian" ? "row-reverse" : "row",
            xs: "column",
          }}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Content />
          <img src="/logo.png" className={style.img} />
        </Box>
      </Box>
      <Branches />
    </Box>
  );
}
