"use client";
import React from "react";
import { Box, Divider, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "300" });
import { data } from "./Drawer";
import { useSelector } from "react-redux";
const style = {
  textDecoration: "none",
  outline: "none",
};

const Text = styled(Typography)`
  font-weight: 300;
  color: #068fff;
  font-size: 1.1rem;
  padding: 8px;
  :hover {
    background-color: #54aef8;
    border-radius: 5px;
    color: #ffff;
  }
`;

export default function Menus() {
  const [t] = useTranslation("global");
  const { language } = useSelector((state) => state.lan);
  console.log(language);
  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      flexDirection={language == "Persian" ? "row-reverse" : "row"}
      alignItems={"center"}
      gap={3}
    >
      <Divider flexItem orientation="vertical" />
      {data.map((data, index) => (
        <React.Fragment key={index}>
          <Link key={index} style={style} href={data.link}>
            <Text className={roboto.className}>{t(data.name)}</Text>
          </Link>
          {index !== 4 ? <Divider orientation="vertical" flexItem /> : <></>}
        </React.Fragment>
      ))}
    </Box>
  );
}
