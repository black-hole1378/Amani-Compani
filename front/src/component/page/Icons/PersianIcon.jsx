import React from "react";
import { Container } from "@mui/material";
import style from "../../../style/page.module.css";
import { Noto_Sans } from "next/font/google";
const noto = Noto_Sans({ subsets: ["devanagari"], weight: "200" });
import { FLEX, IconContainer, Text, persianData } from "./IconStyle";
import urls from "../../../url/global.json";
const EnglishIconContainer = ({ content }) => {
  const { data } = persianData(content);
  return (
    <Container maxWidth sx={{ m: 2, p: 1 }}>
      <IconContainer flexDirection={"column"}>
        {data.map((data) => (
          <FLEX key={data.id}>
            <img
              src={`${urls.url.icon_image}${data.img}`}
              className={style.icon}
            />
            <Text dir="rtl" className={noto.className}>
              {data.name}
            </Text>
          </FLEX>
        ))}
      </IconContainer>
    </Container>
  );
};

export default EnglishIconContainer;
