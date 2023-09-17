import React from "react";
import { useSelector } from "react-redux";
import EnglishContent from "./EnglishContent";
import PersianContent from "./PersianContent";
import { useQuery } from "@apollo/client";
import Data from "@/graphql/About";
import ChineseContent from "./ChineseContent";
const Content = () => {
  const { data, loading } = useQuery(Data);
  const { language } = useSelector((state) => state.lan);
  if (!loading)
    switch (language) {
      case "English":
        return <EnglishContent data={data} />;
      case "Persian":
        return <PersianContent data={data} />;
      case "Chinese":
        return <ChineseContent data={data} />;
    }
};

export default Content;
