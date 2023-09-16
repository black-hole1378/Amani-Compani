import { styled, Typography } from "@mui/material";

export const Text = styled(Typography)`
  font-size: 1.1rem;
  color: #ffff;

  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const SmallText = styled(Typography)`
  font-size: 0.99rem;
  color: #e4e1e1;

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
