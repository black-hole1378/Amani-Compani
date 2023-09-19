import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
export default function ChinaForm({ formik }) {
  return (
    <Container maxWidth sx={{ p: 1 }}>
      <Grid container spacing={{ md: 3 }} rowSpacing={{ md: 3, xs: 4 }}>
        <Grid item md={6} xs={12}>
          <TextField
            name="customer_name"
            label="姓名:"
            value={formik.values.customer_name}
            onChange={formik.handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            name="customer_number"
            fullWidth
            required
            label="电话:"
            value={formik.values.customer_number}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item md={10} xs={12}>
          <TextField
            name="product_name"
            required
            label="产品名称:"
            multiline
            minRows={2}
            value={formik.values.product_name}
            onChange={formik.handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={2} xs={12}>
          <TextField
            required
            name="carton"
            fullWidth
            label="纸箱:"
            value={formik.values.carton}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            required
            name="volume"
            fullWidth
            label="总容积:"
            value={formik.values.volume}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            required
            name="weight"
            fullWidth
            label="总重:"
            value={formik.values.weight}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <TextField
            name="description"
            fullWidth
            multiline
            minRows={3}
            label="描述:"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            required
            name="date"
            fullWidth
            label="存储日期:"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid
          item
          md={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          xs={12}
        >
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            sx={{ width: 300 }}
          >
            加
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
