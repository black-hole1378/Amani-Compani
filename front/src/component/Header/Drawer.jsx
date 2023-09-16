"use client";
import React from "react";
import {
  List,
  Drawer,
  ListItem,
  ListItemText,
  Divider,
  Box,
  styled,
} from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const style = {
  textDecoration: "none",
  outline: "none",
  width: "100%",
};

export const data = [
  {
    link: "./",
    name: "navbar.home",
  },
  {
    link: "/about-us",
    name: "navbar.about_us",
  },
  {
    link: "/contact-us",
    name: "navbar.contact_us",
  },
  {
    link: "/tracking",
    name: "navbar.follow_up",
  },
  {
    link: "./order",
    name: "navbar.branch",
  },
];

const TextWrapper = styled(ListItemText)`
  text-align: center;
  font-weight: 300;
  padding: 8px;
  :hover {
    background-color: #54aef8;
    border-radius: 5px;
    color: #ffff;
  }
`;

export default function DrawerMenu({ open, setOpen }) {
  const [t] = useTranslation("global");
  return (
    <div>
      <Drawer
        open={open}
        sx={{ width: 300 }}
        anchor={"left"}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: "100%",
            minWidth: 200,
            mt: 2,
            bgcolor: "background.paper",
          }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              {data.map((data, index) => (
                <React.Fragment key={index + 1}>
                  <ListItem>
                    <Link href={data.link} style={style}>
                      <TextWrapper
                        primary={t(data.name)}
                        className={roboto.className}
                      />
                    </Link>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </nav>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
