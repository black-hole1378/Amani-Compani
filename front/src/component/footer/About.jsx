import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { PT_Serif } from "next/font/google";
const roboto = PT_Serif({ subsets: ["latin"], weight: "700" });

import { useSelector } from "react-redux";
import Content from "./AboutContent";
const About = ({ data }) => {
  const { language } = useSelector((state) => state.lan);
  const [t] = useTranslation("global");
  return (
    <Box display={"flex"} maxWidth={"450px"} flexDirection={"column"} gap={2}>
      <Box
        display={"flex"}
        flexDirection={language == "Persian" ? "row-reverse" : "row"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          className={roboto.className}
          color={"#FCFFE7"}
        >
          {t("footer.about_us")}
        </Typography>
      </Box>
      <Content language={language} data={data} />
    </Box>
  );
};

export default About;
