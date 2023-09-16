import React from "react";
import { Stack, Paper } from "@mui/material";
import { useQuery } from "@apollo/client";
import BranchData from "@/graphql/Branch";
import style from "../../../style/about_us.module.css";
import Branch from "./Branch";
export default function Branches() {
  const { data, loading } = useQuery(BranchData);
  if (!loading) {
    const array = data.branches.data;
    return (
      <Stack spacing={2}>
        {array &&
          array.map((data, index) => <Branch key={index + 1} data={data} />)}
      </Stack>
    );
  }
}
