import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
export default function Menu({ setOpen, open }) {
  return (
    <IconButton
      edge="start"
      color="info"
      aria-label="menu"
      onClick={() => setOpen(!open)}
      sx={{ mr: 2, display: { xs: "flex", sm: "none", md: "none" } }}
    >
      <MenuIcon fontSize="medium" />
    </IconButton>
  );
}
