import React from "react";
import { Stack, Divider, Box } from "@mui/material";
import { Heading, Subtitle } from "@/component/page/Title/TittleStyle";
import style from "../../../style/contact_us.module.css";
import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["vietnamese"], weight: "500" });
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import InventoryIcon from "@mui/icons-material/Inventory";
import { SmallText, Text } from "./ContentStyle";
const my_data = (info) => {
  let array = [
    {
      name: "ADDRESS",
      data: info.Address,
      ICON: <LocationOnIcon fontSize="large" color="primary" />,
    },
    {
      name: "TELEPHONE",
      data: info.Telephone,
      ICON: <PhoneIcon fontSize="large" color="primary" />,
    },
    {
      name: "POSTAL CODE",
      data: info.postal_code,
      ICON: <InventoryIcon fontSize="large" color="primary" />,
    },
    {
      name: "EMAIL",
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
      <Stack spacing={1}>
        <Heading className={prompt.className}>CONTACT US</Heading>
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
              <Text variant="h6" className={prompt.className}>
                {data.name}:
              </Text>
              <Box minWidth={"300px"}>
                <SmallText variant="body1" className={prompt.className}>
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
