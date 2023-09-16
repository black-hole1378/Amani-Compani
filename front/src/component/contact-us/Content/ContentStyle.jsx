import { styled, Typography } from "@mui/material";

export const Text = styled(Typography)`
  font-size: 1.1rem;
  color: #0d47a1;

  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const SmallText = styled(Typography)`
  font-size: 0.9rem;
  color: #2196f3;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
