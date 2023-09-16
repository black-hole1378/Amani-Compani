import React from "react";
import { Container, Typography, Box } from "@mui/material";
import style from "../../../style/page.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "400" });
import { GoalContent, GoalHeading } from "./GoalStyle";
const EnglishGoal = ({ content }) => {
  const [text] = useTypewriter({
    words: [content.english_heading],
    loop: {},
  });
  return (
    <Container maxWidth className={style.goal_container}>
      <Box>
        <GoalHeading className={pt_sans.className} component={"span"}>
          {text}
        </GoalHeading>
        <GoalHeading component={"span"}>
          <Cursor cursorColor="black" />
        </GoalHeading>
      </Box>
      <GoalContent className={pt_sans.className}>{content.English}</GoalContent>
    </Container>
  );
};
export default EnglishGoal;
