import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import style from "../../../style/follow_up.module.css";
const table_header = ["معلومات", "کارتن ها", "وزن", "نمبر کانتینر", "مسیر"];
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], weight: "400" });
import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["vietnamese"], weight: "200" });
import { Text, TextCell } from "./EnglishTable";

export default function PersianTable({ product }) {
  return (
    <TableContainer component={Paper} className={style.table_container}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "#279EFF" }}>
            {table_header.map((header, index) => (
              <TableCell align="left" key={index + 1}>
                <Text className={pt_sans.className}>{header}</Text>
              </TableCell>
            ))}
            <TableCell>
              <Text align="right" className={pt_sans.className}>
                نام
              </Text>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="left">
              <TextCell className={prompt.className}>
                {product.attributes.persian_description}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="left">
              <TextCell className={prompt.className}>
                {product.attributes.Carton}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="left">
              <TextCell className={prompt.className}>
                {product.attributes.total_weight}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="left">
              <TextCell className={prompt.className}>
                {product.attributes.container_number}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="left">
              <TextCell className={prompt.className}>
                {product.attributes.Direction}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={prompt.className}>
                {product.attributes.customer_name}
              </TextCell>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
