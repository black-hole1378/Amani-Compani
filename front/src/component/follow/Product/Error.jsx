import { Typography, styled, Paper } from "@mui/material";
import React from "react";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "400" });
import { Noto_Sans } from "next/font/google";
const noto = Noto_Sans({ subsets: ["devanagari"], weight: "300" });
const TextError = styled(Typography)`
  font-size: 2rem;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const ErrorContainer = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d71313;
  height: max-content;
  padding: 2rem;
`;

const Error = ({ language }) => {
  switch (language) {
    case "English":
      return (
        <ErrorContainer className={pt_sans.className}>
          <TextError>No such Code Exist!</TextError>
        </ErrorContainer>
      );
    case "Persian":
      return (
        <ErrorContainer className={noto.className}>
          <TextError sx={{ direction: "rtl" }}>
            هیچ سفارش با این کد یافت نشد!
          </TextError>
        </ErrorContainer>
      );
  }
};

export default Error;
