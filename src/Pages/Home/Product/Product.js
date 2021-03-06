import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { lightGreen } from "@mui/material/colors";

const Product = ({ product }) => {
  const { _id, name, description, image } = product;
  return (
    <Card sx={{ my: 3, minWidth: 275, border: 0, "&:hover": { boxShadow: 5 } }}>
      <CardMedia
        component="img"
        style={{
          width: "auto",
          height: "200px",
          margin: "0 auto",
          borderRadius: "15px",
        }}
        image={image}
        alt="Paella dish"
      />
      <CardContent style={{ textAlign: "left" }}>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <NavLink
          style={{ margin: "0 auto", textDecoration: "none" }}
          to={`/purchase/${_id}`}
        >
          <Button
            style={{ marginTop: "15px", backgroundColor: lightGreen[700] }}
            variant="contained"
            size="small"
          >
            Purchase Now
          </Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default Product;
