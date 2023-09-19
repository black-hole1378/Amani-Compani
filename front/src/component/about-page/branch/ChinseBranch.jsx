import React, { useEffect } from "react";
import { Paper, Stack } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import style from "../../../style/about_us.module.css";
import { useInView } from "react-intersection-observer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Noto_Sans_SC } from "next/font/google";
const noto1 = Noto_Sans_SC({ subsets: ["latin"], weight: "900" });
const noto2 = Noto_Sans_SC({ subsets: ["latin"], weight: "500" });
import { EmailOutlined, WorkHistory } from "@mui/icons-material";
import { Text, SmallText } from "./BranchStyle";
const variant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 150 },
};

const getData = ({ data }) => {
  const my_data = [
    {
      data: data.attributes.chinese_address,
      name: "地址",
      ICON: <LocationOnIcon fontSize="large" color="primary" />,
    },
    {
      data: data.attributes.email,
      name: "电子邮件",
      ICON: <EmailOutlined fontSize="large" color="primary" />,
    },
    {
      data: data.attributes.telephone,
      name: "电话",
      ICON: <PhoneIcon fontSize="large" color="primary" />,
    },
    {
      data: data.attributes.working_time,
      name: "上班时间",
      ICON: <WorkHistory fontSize="large" color="primary" />,
    },
  ];

  return { my_data };
};

export default function ChineseBranch({ data }) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { my_data } = getData((data = { data }));
  useEffect(() => {
    if (inView) control.start("visible");
    else control.start("hidden");
  }, [control, inView]);

  return (
    <motion.div initial="hidden" ref={ref} variants={variant} animate={control}>
      <Paper className={style.item}>
        <Stack spacing={2}>
          {my_data.map((data, index) => (
            <Stack
              spacing={1}
              alignItems={"start"}
              key={index + 1}
              direction={"row"}
            >
              {data.ICON}
              <Stack spacing={1}>
                <Text className={noto1.className}>{data.name}:</Text>
                <SmallText className={noto2.className}>{data.data}</SmallText>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </motion.div>
  );
}
