import React, { useRef } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import style from "../../style/follow_up.module.css";
import FormBox from "./FormBox";
const FormContainer = ({ setOpen, setCode }) => {
  const ref = useRef({ current: "-100vw" });
  console.log(ref.current.current);
  const Container = motion(Paper);
  return (
    <Container
      initial={{ x: ref.current.current }}
      transition={{ duration: 1 }}
      animate={{ x: "0" }}
      sx={{ boxShadow: 1 }}
      className={style.form_container}
    >
      <Box display={"flex"} justifyContent={"center"} mt={1}>
        <img src="/whiteLogo.png" className={style.img} />
      </Box>
      <FormBox setOpen={setOpen} setCode={setCode} />
    </Container>
  );
};

export default FormContainer;
