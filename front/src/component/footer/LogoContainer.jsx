import { Box } from "@mui/material";
import React from "react";
import style from "../../style/footer.module.css";
const Logo = () => {
  return (
    <Box display={"flex"} alignItems={"flex-start"}>
      <img src="/whiteLogo.png" alt="Not supported" className={style.logo} />
    </Box>
  );
};

export default Logo;
