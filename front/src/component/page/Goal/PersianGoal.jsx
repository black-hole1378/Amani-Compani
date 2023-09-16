import React from "react";
import { Container, Box } from "@mui/material";
import style from "../../../style/page.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "400" });
import { GoalContent, GoalHeading } from "./GoalStyle";
const PersianGoal = ({ content }) => {
  const [text] = useTypewriter({
    words: [content.persian_heading],
    loop: {},
  });
  return (
    <Container maxWidth className={style.goal_container}>
      <Box>
        <GoalHeading dir="rtl" component={"span"}>
          <Cursor cursorColor="black" />
        </GoalHeading>
        <GoalHeading dir="rtl" className={pt_sans.className} component={"span"}>
          {text}
        </GoalHeading>
      </Box>
      <GoalContent mr={3} dir="rtl" className={pt_sans.className}>
        {content.Persian}
      </GoalContent>
    </Container>
  );
};
export default PersianGoal;
