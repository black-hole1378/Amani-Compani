import React from "react";
import { useSelector } from "react-redux";
import EnglishIcons from "./EnglishIcon";
import useFetch from "@/useFetch/useFetch";
import urls from "../../../url/global.json";
import PersianIcons from "./PersianIcon";
import ChineseIcon from "./ChineseIcon";
const IconContainer = () => {
  const { language } = useSelector((state) => state.lan);
  const { data, isLoading } = useFetch(urls.url.icons);
  if (!isLoading) {
    const my_data = data.data.attributes;
    switch (language) {
      case "English":
        return <EnglishIcons content={my_data} />;
      case "Persian":
        return <PersianIcons content={my_data} />;
      case "Chinese":
        return <ChineseIcon content={my_data} />;
    }
  }
};

export default IconContainer;
