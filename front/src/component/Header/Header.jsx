import React from "react";
import { Box, AppBar, Toolbar, Container } from "@mui/material";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import Menus from "./HeaderMenu";
import Drawer from "./Drawer";
import LanguageWrapper from "./Language";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#F9F9F9" }}>
        <Container maxWidth>
          <Toolbar variant="dense">
            <MenuIcon open={open} setOpen={setOpen} />
            <Box
              sx={{ flexGrow: 1 }}
              display={{ xs: "flex", md: "none", sm: "none" }}
            />
            <Box
              display={"flex"}
              flexDirection={{ md: "row", xs: "row-reverse" }}
              alignItems={"center"}
              justifyContent={{ md: "space-between", xs: "end" }}
              width={{ md: "47%", xs: "100%" }}
            >
              <Logo />
              <LanguageWrapper />
            </Box>
            <Box
              sx={{ flexGrow: 1 }}
              display={{ xs: "none", md: "flex", sm: "flex" }}
            />
            <Menus />
            <Drawer open={open} setOpen={setOpen} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
