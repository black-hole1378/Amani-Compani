import React from "react";
import { styled, Typography } from "@mui/material";
import { Sora } from "next/font/google";
const dosis = Sora({ subsets: ["latin"], weight: "600" });
import { Noto_Sans } from "next/font/google";
const noto = Noto_Sans({ subsets: ["devanagari"], weight: "300" });
import { Noto_Sans_SC } from "next/font/google";
const noto3 = Noto_Sans_SC({ subsets: ["latin"], weight: "300" });
const Text = styled(Typography)`
  color: #f0f0f0;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Title = ({ className, data }) => {
  return (
    <Text variant="body1" className={className}>
      {data}
    </Text>
  );
};

export default function Content({ data, language }) {
  switch (language) {
    case "English":
      return <Title data={data.About_us} className={dosis.className} />;
    case "Persian":
      return <Title data={data.p_about_us} className={noto.className} />;
    case "Chinese":
      return <Title data={data.c_about_us} className={noto3.className} />;
  }
}
