import { styled, Typography } from "@mui/material";

export const Subtitle = styled(Typography)`
  font-size: 1.34rem;
  color: #1976d2;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const Content = styled(Typography)`
  font-size: 1.2rem;
  color: #2196f3;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
