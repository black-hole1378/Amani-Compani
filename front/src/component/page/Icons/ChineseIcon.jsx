import React from "react";
import { Container } from "@mui/material";
import style from "../../../style/page.module.css";
import { Noto_Sans_SC } from "next/font/google";
const noto2 = Noto_Sans_SC({ subsets: ["latin"], weight: "400" });
import { FLEX, IconContainer, Text, chineseData } from "./IconStyle";
import urls from "../../../url/global.json";
const ChineseIcon = ({ content }) => {
  const { data } = chineseData(content);
  return (
    <Container maxWidth sx={{ m: 2, p: 1 }}>
      <IconContainer>
        {data.map((data) => (
          <FLEX key={data.id}>
            <img
              src={`${urls.url.icon_image}${data.img}`}
              className={style.icon}
            />
            <Text className={noto2.className}>{data.name}</Text>
          </FLEX>
        ))}
      </IconContainer>
    </Container>
  );
};

export default ChineseIcon;
