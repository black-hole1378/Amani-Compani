import React from "react";
import { Container, Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import EnglishForm from "./EnglishForm";
import PersianForm from "./PersianForm";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { Order } from "@/graphql/Order";
export default function Form() {
  const { language } = useSelector((state) => state.lan);
  const [createOrder, { error }] = useMutation(Order);
  const formik = useFormik({
    initialValues: {
      customer_name: "",
      customer_number: "",
      product_name: "",
      volume: "",
      weight: "",
      description: "",
      carton: 0,
      date: "",
    },
    onSubmit: () => {
      createOrder({
        variables: {
          name: formik.values.customer_name,
          customer_number: formik.values.customer_number,
          product_name: formik.values.product_name,
          cartons: formik.values.carton,
          total_volume: formik.values.volume,
          total_weight: formik.values.weight,
          description: formik.values.description,
          store_date: formik.values.date,
        },
      });
      if (error) console.log(error);
    },
  });

  switch (language) {
    case "English":
      return <EnglishForm formik={formik} />;
    case "Persian":
      return <PersianForm />;
  }
}
