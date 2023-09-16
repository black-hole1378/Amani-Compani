"use client";
import React, { useState } from "react";
import style from "../../style/follow_up.module.css";
import { Container } from "@mui/material";
import FormContainer from "@/component/follow/Form";
import ProductContainer from "@/component/follow/Product/ProductMenu";
export default function FollowUp() {
  const [open, setOpen] = useState(true);
  const [code, setCode] = useState("");
  if (open)
    return (
      <Container maxWidth className={style.container}>
        <FormContainer setOpen={setOpen} setCode={setCode} />
      </Container>
    );
  else
    return (
      <Container maxWidth className={style.container}>
        <ProductContainer code={code} />
      </Container>
    );
}
