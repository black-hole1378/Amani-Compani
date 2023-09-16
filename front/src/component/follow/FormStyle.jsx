import { styled, Typography } from "@mui/material";

export const Text = styled(Typography)`
  font-size: 2rem;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
