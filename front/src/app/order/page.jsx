"use client";
import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import style from "../../style/order.module.css";
import Form from "@/component/order/Form";
import Content from "@/component/order/Content";
export default function Page() {
  const [open, setOpen] = useState(true);
  return (
    <Box className={style.container}>
      <Box display={open ? "flex" : "none"}>
        <Paper className={style.form_container} sx={{ pt: 3 }}>
          <Form setOpen={setOpen} />
        </Paper>
      </Box>
      <Box display={!open ? "flex" : "none"}>
        <Content />
      </Box>
    </Box>
  );
}
