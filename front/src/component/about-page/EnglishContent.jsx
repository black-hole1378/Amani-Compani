import React, { useRef } from "react";
import { Stack, Divider, Box } from "@mui/material";
import { Heading } from "@/component/page/Title/TittleStyle";
import { Subtitle, Content } from "./ContentStyle";
import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["vietnamese"], weight: "500" });
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "400" });
import style from "../../style/about_us.module.css";
import { motion } from "framer-motion";
export default function EnglishContent({ data }) {
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
          <Heading className={prompt.className}>ABOUT US</Heading>
          <Divider component="span" className={style.divider} />
        </Stack>
        <Stack spacing={1} pl={1}>
          <Subtitle className={pt_sans.className}>
            {data.about.data.attributes.english_heading}
          </Subtitle>
          <Content className={pt_sans.className}>
            {data.about.data.attributes.english_content}
          </Content>
        </Stack>
      </Stack>
    </BOX>
  );
}
