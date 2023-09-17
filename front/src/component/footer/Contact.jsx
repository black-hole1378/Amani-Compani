import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { PT_Serif } from "next/font/google";
const roboto = PT_Serif({ subsets: ["latin"], weight: "700" });
import { Sora } from "next/font/google";
const dosis = Sora({ subsets: ["latin"], weight: "400" });
import { useSelector } from "react-redux";

const getData = (data, language) => {
  switch (language) {
    case "English":
      return data.Address;
    case "Persian":
      return data.P_Address;
    case "Chinese":
      return data.C_Address;
  }
};

const Contact = ({ data }) => {
  const { language } = useSelector((state) => state.lan);
  const my_data = [
    { name: "footer.contact.address", link: getData(data, language) },
    { name: "footer.contact.tel", link: data.Telephone },
    { name: "footer.contact.postal_code", link: data.postal_code },
    { name: "footer.contact.email", link: data.Email },
  ];
  const [t] = useTranslation("global");
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box
        display={"flex"}
        flexDirection={language == "Persian" ? "row-reverse" : "row"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontWeight={600}
          className={roboto.className}
          color={"#ffff"}
        >
          {t("footer.contact.name")}
        </Typography>
      </Box>
      {my_data.map((data, index) => (
        <Box
          key={index}
          display={"flex"}
          flexDirection={language == "Persian" ? "row-reverse" : "row"}
          alignItems={"center"}
          gap={1}
        >
          <Box
            display={"flex"}
            flexDirection={language == "Persian" ? "row-reverse" : "row"}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              className={roboto.className}
              color={"#FCFFE7"}
            >
              {t(data.name)}
            </Typography>
            <Typography color={"#FCFFE7"}>:</Typography>
          </Box>
          <Typography
            variant="body2"
            fontWeight={300}
            color={"#F0F0F0"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            className={dosis.className}
          >
            {data.link}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Contact;
