"use client";
import { Box, Paper } from "@mui/material";
import React from "react";
import style from "../../style/order.module.css";
import Form from "@/component/order/Form";
export default function Page() {
  return (
    <Box className={style.container}>
      <Paper className={style.form_container} sx={{ pt: 3 }}>
        <Form />
      </Paper>
    </Box>
  );
}
