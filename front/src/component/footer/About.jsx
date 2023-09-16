import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { PT_Serif } from "next/font/google";
const roboto = PT_Serif({ subsets: ["latin"], weight: "700" });
import { Sora } from "next/font/google";
const dosis = Sora({ subsets: ["latin"], weight: "600" });
import { useSelector } from "react-redux";
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
      <Typography
        variant="body2"
        fontWeight={300}
        color={"#F0F0F0"}
        textOverflow={"ellipsis"}
        overflow={"hidden"}
        className={dosis.className}
      >
        {language == "English" ? data.About_us : data.p_about_us}
      </Typography>
    </Box>
  );
};

export default About;
