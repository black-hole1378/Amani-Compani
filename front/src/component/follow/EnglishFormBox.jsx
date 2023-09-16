import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["vietnamese"], weight: "300" });
import { Text } from "./FormStyle";
const EnglishFormBox = ({ setOpen, setCode }) => {
  const [value, setValue] = useState("");

  return (
    <Container maxWidth>
      <Text
        sx={{ direction: "rtl" }}
        fontSize={"1rem"}
        className={prompt.className}
      >
        Welcome back
      </Text>
      <Box width={"100%"} mt={6}>
        <TextField
          fullWidth
          name="code"
          label="Code number"
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
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default EnglishFormBox;
