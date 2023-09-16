import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
const table_header = [
  "Description",
  "Cartons",
  "Weight",
  "Container number",
  "Direction",
];
import { PT_Sans } from "next/font/google";
import style from "../../../style/follow_up.module.css";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "700" });
import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["vietnamese"], weight: "200" });
export const Text = styled(Typography)`
  font-size: 0.9rem;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

export const TextCell = styled(Typography)`
  font-size: 0.8rem;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

export default function EnglishTable({ product }) {
  console.log("hello", product);
  return (
    <TableContainer component={Paper} className={style.table_container}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "#279EFF" }}>
            <TableCell>
              <Text className={pt_sans.className}>Name</Text>
            </TableCell>
            {table_header.map((header, index) => (
              <TableCell align="right" key={index + 1}>
                <Text className={pt_sans.className}>{header}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ bgcolor: "#75C2F6" }} component="th" scope="row">
              <TextCell className={prompt.className}>
                {product.attributes.customer_name}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={prompt.className}>
                {product.attributes.description}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={prompt.className}>
                {product.attributes.Carton}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={prompt.className}>
                {product.attributes.total_weight}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={prompt.className}>
                {product.attributes.container_number}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={prompt.className}>
                {product.attributes.Direction}
              </TextCell>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
