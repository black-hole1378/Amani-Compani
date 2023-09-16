import React from "react";
import { Box, Container } from "@mui/material";
import style from "../../../style/page.module.css";
import { useSelector } from "react-redux";
import useFetch from "@/useFetch/useFetch";
import urls from "../../../url/global.json";
const ChineseTitle = () => {
  const { language } = useSelector((state) => state.lan);
  const { data, isLoading } = useFetch(urls.url.title);
  return <div>Chinese</div>;
};

export default ChineseTitle;
