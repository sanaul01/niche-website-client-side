import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Product from "../Product/Product";
import Typography from "@mui/material/Typography";
import { lightGreen } from "@mui/material/colors";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://arcane-dawn-96246.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 800, fontSize: 24, mb: 5, color: lightGreen[900] }}
        >
          Home Page
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products?.slice(0, 6).map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Product key={product._id} product={product}></Product>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
