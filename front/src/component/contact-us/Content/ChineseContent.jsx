import React from "react";
import { Stack, Divider, Box } from "@mui/material";
import { Heading } from "@/component/page/Title/TittleStyle";
import style from "../../../style/contact_us.module.css";
import { Noto_Sans_SC } from "next/font/google";
const noto1 = Noto_Sans_SC({ subsets: ["latin"], weight: "700" });
const noto2 = Noto_Sans_SC({ subsets: ["latin"], weight: "500" });
const noto3 = Noto_Sans_SC({ subsets: ["latin"], weight: "400" });
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import InventoryIcon from "@mui/icons-material/Inventory";
import { SmallText, Text } from "./ContentStyle";
const my_data = (info) => {
  let array = [
    {
      name: "地址",
      data: info.C_Address,
      ICON: <LocationOnIcon fontSize="large" color="primary" />,
    },
    {
      name: "电话",
      data: info.Telephone,
      ICON: <PhoneIcon fontSize="large" color="primary" />,
    },
    {
      name: "邮政编码",
      data: info.postal_code,
      ICON: <InventoryIcon fontSize="large" color="primary" />,
    },
    {
      name: "电子邮件",
      data: info.Email,
      ICON: <LocalPostOfficeIcon fontSize="large" color="primary" />,
    },
  ];

  return { array };
};

export default function ChineseContent({ data }) {
  const { array } = my_data(data.footer.data.attributes);
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Heading className={noto1.className}>联系我们</Heading>
        <Divider component="span" className={style.divider} />
      </Stack>
      <Stack spacing={8} ml={5}>
        {array.map((data, index) => (
          <Stack
            key={index}
            alignItems={"start"}
            justifyContent={"start"}
            spacing={2}
            direction={"row"}
            top={0}
          >
            {data.ICON}
            <Stack spacing={1}>
              <Text variant="h6" className={noto2.className}>
                {data.name}:
              </Text>
              <Box minWidth={"300px"}>
                <SmallText variant="body1" className={noto3.className}>
                  {data.data}
                </SmallText>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
