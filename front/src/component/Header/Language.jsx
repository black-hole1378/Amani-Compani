import React from "react";
import { Menu, MenuItem, IconButton, Box, Typography } from "@mui/material";
import { changeLocalLanguage } from "../../store/slice";
import { useDispatch } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import { useTranslation } from "react-i18next";

const data = [
  {
    lng: "English",
    flag: "https://img.icons8.com/color/48/great-britain.png",
  },
  {
    lng: "Persian",
    flag: "https://img.icons8.com/color/96/afghanistan-flag-circle.png",
  },
  {
    lng: "Chinese",
    flag: "https://img.icons8.com/color/48/china.png",
  },
];

export default function LanguageWrapper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lan, setLan] = React.useState(data[0]);
  const [t, i18n] = useTranslation("global");
  const distpath = useDispatch();
  const changeLanguage = (data) => {
    i18n.changeLanguage(data.lng);
    setLan(data);
    distpath(changeLocalLanguage(data.lng));
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <img src={lan.flag} width={25} height={25} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {data.map((data, index) => (
          <MenuItem key={index} onClick={() => changeLanguage(data)}>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <img src={data.flag} width={25} height={25} />
              <Typography variant="body1">{data.lng}</Typography>
              {data.lng === lan.lng ? <DoneIcon fontSize="small" /> : <></>}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
