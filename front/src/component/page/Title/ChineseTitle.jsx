import React from "react";
import { Box, Container, Divider } from "@mui/material";
import style from "../../../style/page.module.css";
import { Noto_Sans_SC } from "next/font/google";
const noto = Noto_Sans_SC({ subsets: ["latin"], weight: "500" });
import { Content, FLEX, Heading, Subtitle } from "./TittleStyle";
const noto2 = Noto_Sans_SC({ subsets: ["latin"], weight: "500" });
const noto3 = Noto_Sans_SC({ subsets: ["latin"], weight: "300" });

const ChinseTitle = ({ title }) => {
  return (
    <Container maxWidth className={style.title_container}>
      <FLEX>
        <Heading className={noto.className}>{title.chinese_heading}</Heading>
        <Divider component="span" className={style.divider} />
      </FLEX>
      <Box width={"88vw"}>
        <Subtitle className={noto2.className}>
          {title.chinese_subtitle}
        </Subtitle>
        <Content className={noto3.className}>{title.chinese_content}</Content>
      </Box>
    </Container>
  );
};

export default ChinseTitle;
