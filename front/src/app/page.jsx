"use client";
import styles from "../style/page.module.css";
import Slider from "@/component/page/swiper/Slider";
import { Box } from "@mui/material";
import { Suspense } from "react";
import Loading from "./loading";
import Title from "../component/page/Title/Title";
import IconContainer from "@/component/page/Icons/IconContainer";
import Goal from "@/component/page/Goal/Goal";
export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Suspense fallback={<Loading />}>
          <Slider />
        </Suspense>
        <Title />
        <IconContainer />
        <Goal />
      </Box>
    </main>
  );
}
