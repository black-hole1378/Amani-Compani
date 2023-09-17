import React from "react";
import { useSelector } from "react-redux";
import urls from "../../../url/global.json";
import EnglishGoal from "./EnglishGoal";
import useFetch from "@/useFetch/useFetch";
import PersianGoal from "./PersianGoal";
import { useQuery } from "@apollo/client";
import { GoalData } from "@/graphql/Goal";
import ChineseGoal from "./ChineseGoal";
const Goal = () => {
  const { language } = useSelector((state) => state.lan);
  const { data, loading } = useQuery(GoalData);
  if (!loading) {
    switch (language) {
      case "English":
        return <EnglishGoal content={data.goal.data.attributes} />;
      case "Persian":
        return <PersianGoal content={data.goal.data.attributes} />;
      case "Chinese":
        return <ChineseGoal content={data.goal.data.attributes} />;
    }
  }
};

export default Goal;
