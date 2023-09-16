import React from "react";
import { Stack, Divider, Box } from "@mui/material";
import { Heading, Subtitle } from "@/component/page/Title/TittleStyle";
import style from "../../../style/contact_us.module.css";
import { Lalezar } from "next/font/google";
const lalezar = Lalezar({ subsets: ["arabic"], weight: "400" });
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import InventoryIcon from "@mui/icons-material/Inventory";
import { SmallText, Text } from "./ContentStyle";
const my_data = (info) => {
  let array = [
    {
      name: "آدرس",
      data: info.P_Address,
      ICON: <LocationOnIcon fontSize="large" color="primary" />,
    },
    {
      name: "تلفون",
      data: info.Telephone,
      ICON: <PhoneIcon fontSize="large" color="primary" />,
    },
    {
      name: "کد پستی",
      data: info.postal_code,
      ICON: <InventoryIcon fontSize="large" color="primary" />,
    },
    {
      name: "ایمیل",
      data: info.Email,
      ICON: <LocalPostOfficeIcon fontSize="large" color="primary" />,
    },
  ];

  return { array };
};

export default function EnglishContent({ data }) {
  const { array } = my_data(data.footer.data.attributes);
  return (
    <Stack spacing={4}>
      <Stack spacing={1} alignItems={"end"}>
        <Heading className={lalezar.className}>تماس با ما</Heading>
        <Divider component="span" className={style.divider} />
      </Stack>
      <Box
        display={"flex"}
        alignItems={"end"}
        mr={4}
        gap={5}
        flexDirection={"column"}
      >
        {array.map((data, index) => (
          <Box
            display={"flex"}
            flexDirection={"row-reverse"}
            gap={2}
            key={index + 1}
            justifyContent={"end"}
          >
            {data.ICON}
            <Stack spacing={1}>
              <Text className={lalezar.className} dir="rtl">
                {data.name}:
              </Text>
              <SmallText className={lalezar.className}>{data.data}</SmallText>
            </Stack>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
