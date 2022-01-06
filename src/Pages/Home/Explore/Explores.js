import { Container, Grid, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Explore from "./Explore/Explore";
import "./Explores.css";

const Explores = () => {
  const [products, setProducts] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const size = 12;

  useEffect(() => {
    fetch(
      `https://arcane-dawn-96246.herokuapp.com/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 700, fontSize: 24, my: 3, color: lightGreen[800] }}
        >
          All Products
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products?.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Explore key={product._id} product={product}></Explore>
            </Grid>
          ))}
        </Grid>
        <Grid className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected" : ""}
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Explores;
