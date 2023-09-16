import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useFetch from "../../useFetch/useFetch";
import urls from "../../url/global.json";
import style from "../../style/footer.module.css";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { SocialMediaData } from "../../graphql/socialMedia";
const SocialMedia = () => {
  const { data, loading } = useQuery(SocialMediaData);
  let my_data;
  console.log(data);
  if (!loading) {
    my_data = [
      {
        Component: <WhatsAppIcon fontSize="medium" color="#fff" />,
        link: data.socialMedia.data.attributes.whatsapp,
      },
      {
        Component: <FacebookIcon fontSize="medium" color="#fff" />,
        link: data.socialMedia.data.attributes.facebook,
      },
      {
        Component: <TwitterIcon fontSize="medium" color="#fff" />,
        link: data.socialMedia.data.attributes.twitter,
      },
      {
        Component: <LinkedInIcon fontSize="medium" color="#fff" />,
        link: data.socialMedia.data.attributes.linkedin,
      },
      {
        Component: <InstagramIcon fontSize="medium" color="#fff" />,
        link: data.socialMedia.data.attributes.insagram,
      },
    ];
    return (
      <Box
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {my_data.map((data, index) => (
          <Link key={index} href={data.link} className={style.link}>
            {data.Component}
          </Link>
        ))}
      </Box>
    );
  }
};

export default SocialMedia;
