import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "700" });
import { Noto_Sans } from "next/font/google";
const noto = Noto_Sans({ subsets: ["devanagari"], weight: "400" });
import { Noto_Sans_SC } from "next/font/google";
const noto1 = Noto_Sans_SC({ subsets: ["latin"], weight: "700" });
const BOX = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 730px;

  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;

const PersianBox = styled(BOX)`
  width: 500px;
`;

const Text = styled(Typography)`
  color: #2193f0;
  font-size: 0.9rem;
  @media screen and (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChineseContainer = ({ port }) => {
  return (
    <BOX>
      <Container gap={1}>
        <Text className={noto1.className}>{port.ch_first_lable}</Text>
        <Text className={noto1.className}>{port.port1_date}</Text>
      </Container>

      <Container gap={1}>
        <Text className={noto1.className}>{port.ch_second_label}</Text>
        <Text className={noto1.className}>{port.port2_date}</Text>
      </Container>

      <Container gap={1}>
        <Text className={noto1.className}>{port.ch_third_label}</Text>
        <Text className={noto1.className}>{port.port3_date}</Text>
      </Container>
    </BOX>
  );
};

const EnglishPortContainer = ({ port }) => {
  return (
    <BOX>
      <Container gap={1}>
        <Text className={pt_sans.className}>{port.firts_label}</Text>
        <Text className={pt_sans.className}>{port.port1_date}</Text>
      </Container>

      <Container gap={1}>
        <Text className={pt_sans.className}>{port.second_label}</Text>
        <Text className={pt_sans.className}>{port.port2_date}</Text>
      </Container>

      <Container gap={1}>
        <Text className={pt_sans.className}>{port.third_label}</Text>
        <Text className={pt_sans.className}>{port.port3_date}</Text>
      </Container>
    </BOX>
  );
};

const PersianPortContainer = ({ port }) => {
  return (
    <PersianBox>
      <Container gap={1}>
        <Text className={noto.className}>{port.p_first_lable}</Text>
        <Text className={pt_sans.className}>{port.port1_date}</Text>
      </Container>

      <Container gap={1}>
        <Text className={noto.className}>{port.p_second_label}</Text>
        <Text className={pt_sans.className}>{port.port2_date}</Text>
      </Container>

      <Container gap={1}>
        <Text className={noto.className} sx={{ direction: "rtl" }}>
          {port.p_third_label}
        </Text>
        <Text className={pt_sans.className}>{port.port3_date}</Text>
      </Container>
    </PersianBox>
  );
};

export default function PortContainer({ product, language }) {
  const port = product.attributes.port_label.data.attributes;
  switch (language) {
    case "English":
      return <EnglishPortContainer port={port} />;
    case "Persian":
      return <PersianPortContainer port={port} />;
    case "Chinese":
      return <ChineseContainer port={port} />;
  }
}
