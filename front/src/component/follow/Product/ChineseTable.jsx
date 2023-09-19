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
const table_header = ["描述", "纸箱", "纸箱", "集装箱号", "方向"];
import style from "../../../style/follow_up.module.css";
import { Noto_Sans_SC } from "next/font/google";
const noto1 = Noto_Sans_SC({ subsets: ["latin"], weight: "700" });
const noto2 = Noto_Sans_SC({ subsets: ["latin"], weight: "500" });

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

export default function ChineseTable({ product }) {
  console.log("hello", product);
  return (
    <TableContainer component={Paper} className={style.table_container}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "#279EFF" }}>
            <TableCell>
              <Text className={noto1.className}>姓名</Text>
            </TableCell>
            {table_header.map((header, index) => (
              <TableCell align="right" key={index + 1}>
                <Text className={noto1.className}>{header}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ bgcolor: "#75C2F6" }} component="th" scope="row">
              <TextCell className={noto2.className}>
                {product.attributes.customer_name}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={noto2.className}>
                {product.attributes.chinese_description}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={noto2.className}>
                {product.attributes.Carton}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={noto2.className}>
                {product.attributes.total_weight}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={noto2.className}>
                {product.attributes.container_number}
              </TextCell>
            </TableCell>
            <TableCell sx={{ bgcolor: "#75C2F6" }} align="right">
              <TextCell className={noto2.className}>
                {product.attributes.chinese_direction}
              </TextCell>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
