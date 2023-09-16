import React from "react";
import { useSelector } from "react-redux";
import EnglishTitle from "./EnglishTitle";
import PersianTitle from "./PersianTitle";
import { TitleData } from "@/graphql/Title";
import { useQuery } from "@apollo/client";
const Goal = () => {
  const { language } = useSelector((state) => state.lan);
  console.log(language);
  const { data, loading } = useQuery(TitleData);

  if (!loading) {
    console.log(data);
    const title = data.title.data.attributes;
    switch (language) {
      case "English":
        return <EnglishTitle title={title} />;
      case "Persian":
        return <PersianTitle title={title} />;
    }
  }
};

export default Goal;
