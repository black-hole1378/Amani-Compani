import React from "react";
import { useSelector } from "react-redux";
import { FetchCustomer } from "@/graphql/Customer";
import Error from "./Error";
import ProductTable from "./ProductTable";
import { Box } from "@mui/material";
import CustomStepper from "./CustomStepper";
import PortContainer from "./Port";

const ProductContainer = ({ code }) => {
  const { language } = useSelector((state) => state.lan);
  const { data, loading } = FetchCustomer(code);
  console.log(data);
  if (!loading) {
    const product = data.products.data;
    if (product.length == 0) return <Error language={language} />;
    else {
      return (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          justifyContent={"center"}
        >
          <ProductTable language={language} product={product[0]} />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={4}
          >
            <CustomStepper product={product[0]} />
            <PortContainer product={product[0]} language={language} />
          </Box>
        </Box>
      );
    }
  }
};

export default ProductContainer;
