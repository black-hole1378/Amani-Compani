import { Container, Box } from "@mui/material";
import React from "react";
import style from "../../style/footer.module.css";
import About from "./About";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import Logo from "./LogoContainer";
import SocialMedia from "./SocialMedia";
import { useQuery } from "@apollo/client";
import { FooterData } from "@/graphql/Footer";
const Footer = () => {
  const { data, loading } = useQuery(FooterData);
  const { language } = useSelector((state) => state.lan);
  if (!loading)
    return (
      <Box className={style.footer}>
        <Container maxWidth className={style.container}>
          <Box
            display={"flex"}
            flexDirection={{
              md: language == "Persian" ? "row-reverse" : "row",
              xs: "column",
            }}
            justifyContent={"space-around"}
            gap={{ md: "10px", xs: "20px" }}
          >
            <Contact data={data.footer.data.attributes} />
            <About data={data.footer.data.attributes} />
            <Logo />
          </Box>
          <SocialMedia />
        </Container>
      </Box>
    );
};

export default Footer;
