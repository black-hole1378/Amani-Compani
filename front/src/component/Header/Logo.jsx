"use client";
import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { styled } from "styled-components";

const LogoWrapper = styled.img`
  width: 110px;
  height: 100px;
  @media screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

const style = {
  textDecoration: "none",
  outline: "none",
};

export default function Logo() {
  return (
    <Box>
      <Link href="./">
        <LogoWrapper src="/logo.png" />
      </Link>
    </Box>
  );
}
