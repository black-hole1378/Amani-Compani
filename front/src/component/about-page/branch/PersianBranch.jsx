import React, { useEffect } from "react";
import { Paper, Stack } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import style from "../../../style/about_us.module.css";
import { useInView } from "react-intersection-observer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["vietnamese"], weight: "500" });
import { EmailOutlined, WorkHistory } from "@mui/icons-material";
import { Text, SmallText } from "./BranchStyle";
const variant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 150 },
};

const getData = ({ data }) => {
  const my_data = [
    {
      data: data.attributes.p_addrees,
      name: "آدرس",
      ICON: <LocationOnIcon fontSize="large" color="primary" />,
    },
    {
      data: data.attributes.email,
      name: "ایمیل",
      ICON: <EmailOutlined fontSize="large" color="primary" />,
    },
    {
      data: data.attributes.telephone,
      name: "تلفون",
      ICON: <PhoneIcon fontSize="large" color="primary" />,
    },
    {
      data: data.attributes.working_time,
      name: "تایم کاری",
      ICON: <WorkHistory fontSize="large" color="primary" />,
    },
  ];

  return { my_data };
};

export default function PersianBranch({ data }) {
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
              direction={"row-reverse"}
            >
              {data.ICON}
              <Stack spacing={1}>
                <Text className={prompt.className} dir="rtl" alignItems={"end"}>
                  {data.name}:
                </Text>
                <SmallText>{data.data}</SmallText>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </motion.div>
  );
}
