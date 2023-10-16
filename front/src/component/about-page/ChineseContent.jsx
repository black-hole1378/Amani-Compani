import React, { useRef } from "react";
import { Stack, Divider, Box } from "@mui/material";
import { Heading } from "@/component/page/Title/TittleStyle";
import { Subtitle, Content } from "./ContentStyle";
import { Noto_Sans_SC } from "next/font/google";
const noto1 = Noto_Sans_SC({ subsets: ["latin"], weight: "700" });
const noto2 = Noto_Sans_SC({ subsets: ["latin"], weight: "500" });
import style from "../../style/about_us.module.css";
import { motion } from "framer-motion";
export default function ChineseContent({ data }) {
  const BOX = motion(Box);
  const ref = useRef({ current: "-100vw" });
  return (
    <BOX
      initial={{ x: ref.current.current }}
      transition={{ duration: 1 }}
      animate={{ x: "0" }}
    >
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Heading className={prompt.className}>关于我们</Heading>
          <Divider component="span" className={style.divider} />
        </Stack>
        <Stack spacing={1} pl={1}>
          <Subtitle className={noto1.className}>
            {data.about.data.attributes.chinese_heading}
          </Subtitle>
          <Content className={noto2.className}>
            {data.about.data.attributes.chinese_content}
          </Content>
        </Stack>
      </Stack>
    </BOX>
  );
}
