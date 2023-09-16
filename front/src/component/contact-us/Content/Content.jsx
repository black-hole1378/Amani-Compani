import React from "react";
import { useSelector } from "react-redux";
import EnglishContent from "./EnglishContent";
import PersianContent from "./PersianContent";
import { useQuery } from "@apollo/client";
import { FooterData } from "@/graphql/Footer";
const Content = () => {
  const { data, loading } = useQuery(FooterData);
  const { language } = useSelector((state) => state.lan);
  if (!loading)
    switch (language) {
      case "English":
        return <EnglishContent data={data} />;
      case "Persian":
        return <PersianContent data={data} />;
    }
};

export default Content;
