import React from "react";
import { Container, Grid } from "@mui/material";
import style from "../../../style/page.module.css";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "700" });
import { FLEX, IconContainer, Text, englishData } from "./IconStyle";
import urls from "../../../url/global.json";
const EnglishIconContainer = ({ content }) => {
  const { data } = englishData(content);
  console.log(content);
  return (
    <Container maxWidth sx={{ m: 2, p: 1 }}>
      <IconContainer>
        {data.map((data) => (
          <FLEX key={data.id}>
            <img
              src={`${urls.url.icon_image}${data.img}`}
              className={style.icon}
            />
            <Text className={pt_sans.className}>{data.name}</Text>
          </FLEX>
        ))}
      </IconContainer>
    </Container>
  );
};

export default EnglishIconContainer;
