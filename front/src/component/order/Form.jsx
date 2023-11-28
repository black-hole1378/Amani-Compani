import React from "react";
import { useSelector } from "react-redux";
import EnglishForm from "./EnglishForm";
import PersianForm from "./PersianForm";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { Order } from "@/graphql/Order";
import ChinaForm from "./ChinaForm";
export default function Form({ setOpen }) {
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
      carton: "",
      date: "",
    },
    onSubmit: () => {
      console.log();
      createOrder({
        variables: {
          input: {
            customer_name: formik.values.customer_name,
            store_date: formik.values.date,
            description: formik.values.description,
            customer_number: formik.values.customer_number,
            total_volume: formik.values.volume,
            total_weight: formik.values.weight,
            product_name: formik.values.product_name,
            cartons: formik.values.carton,
          },
        },
      });
      setOpen(false);
      if (error) console.log(error);
    },
  });

  switch (language) {
    case "English":
      return <EnglishForm formik={formik} />;
    case "Persian":
      return <PersianForm formik={formik} />;
    case "Chinese":
      return <ChinaForm formik={formik} />;
  }
}
