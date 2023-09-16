import React from "react";
import { Container, Divider } from "@mui/material";
import style from "../../../style/page.module.css";
import { Lalezar } from "next/font/google";
const lalezar = Lalezar({ subsets: ["arabic"], weight: "400" });
import { Noto_Sans } from "next/font/google";
const noto = Noto_Sans({ subsets: ["devanagari"], weight: "300" });
import { FLEX, Heading, Subtitle, Content } from "./TittleStyle";
const PersianTitle = ({ title }) => {
  return (
    <Container maxWidth className={style.title_container}>
      <FLEX flexDirection={"row-reverse"} alignItems={"end"} mr={4}>
        <Heading sx={{ direction: "rtl" }} className={lalezar.className}>
          {title.persian_heading}
        </Heading>
        <Divider component="span" className={style.divider} />
      </FLEX>
      <FLEX gap={1} flexDirection={"row-reverse"} mr={4} alignItems={"end"}>
        <Subtitle sx={{ direction: "rtl" }} className={lalezar.className}>
          {title.persian_subtitle}
        </Subtitle>
        <Content sx={{ direction: "rtl" }} className={noto.className}>
          {title.persian_content}
        </Content>
      </FLEX>
    </Container>
  );
};

export default PersianTitle;
