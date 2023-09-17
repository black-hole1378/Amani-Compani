import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Noto_Sans_SC } from "next/font/google";
const noto1 = Noto_Sans_SC({ subsets: ["latin"], weight: "700" });
import { Text } from "./FormStyle";
const ChineseFormBox = ({ setOpen, setCode }) => {
  const [value, setValue] = useState("");
  return (
    <Container maxWidth>
      <Text
        sx={{ direction: "rtl" }}
        fontSize={"1rem"}
        className={noto1.className}
      >
        欢迎回来
      </Text>
      <Box width={"100%"} mt={6}>
        <TextField
          fullWidth
          name="code"
          label="代码编号"
          sx={{ bgcolor: "#fff" }}
          id="fullWidth"
          size="small"
          variant="outlined"
          onChange={(value) => setValue(value.target.value)}
          value={value}
          required
        />
        <Button
          sx={{ mt: 4 }}
          color="primary"
          variant="contained"
          size="medium"
          fullWidth
          onClick={() => {
            setOpen(false);
            setCode(value);
          }}
        >
          代码编号
        </Button>
      </Box>
    </Container>
  );
};

export default ChineseFormBox;
