import React from "react";
import { Typography, Box, styled } from "@mui/material";

export const Heading = styled(Typography)`
  font-size: 2.1rem;
  color: #279eff;
  max-width: 1400px;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Content = styled(Typography)`
  font-size: 1.2rem;
  max-width: 1400px;
  color: #73777a;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    margin-top: 7px;
    max-width: 100vw;
  }
`;

export const Subtitle = styled(Typography)`
  font-size: 1.4rem;
  color: #80c3fa;
  margin-top: 1.2rem;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const FLEX = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 90vw;
`;
