import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["vietnamese"], weight: "300" });
import { Text } from "./FormStyle";
const PersianFormBox = ({ setOpen, setCode }) => {
  const [value, setValue] = useState("");

  return (
    <Container maxWidth>
      <Text
        sx={{ direction: "rtl" }}
        fontSize={"1rem"}
        className={prompt.className}
      >
        خوش آمدید
      </Text>
      <Box width={"100%"} mt={6}>
        <TextField
          fullWidth
          name="code"
          label="کد نمبر"
          sx={{ bgcolor: "#fff" }}
          id="fullWidth"
          dir="rtl"
          size="small"
          variant="outlined"
          onChange={(value) => setValue(value.target.value)}
          value={value}
          required
        />
        <Button
          sx={{ mt: 4, fontSize: "1.2rem" }}
          color="primary"
          variant="contained"
          size="medium"
          fullWidth
          onClick={() => {
            setOpen(false);
            setCode(value);
          }}
        >
          جتسجو
        </Button>
      </Box>
    </Container>
  );
};

export default PersianFormBox;
