import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Alert, Button, Grid } from "@mui/material";
import BookingModal from "../../Dashbord/BookingModal/BookingModal";
import { lightBlue, lightGreen } from "@mui/material/colors";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [bookingOpen, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  useEffect(() => {
    fetch(`https://arcane-dawn-96246.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Grid container spacing={2} sx={{ my: 5 }}>
        <Grid item xs={12} md={12} style={{ display: "flex" }}>
          <Grid
            xs={12}
            md={6}
            sx={{ margin: "30px", minWidth: 275, border: 0, boxShadow: 0 }}
          >
            <CardMedia
              component="img"
              style={{
                width: "auto",
                height: "300px",
                margin: "0 auto",
                borderRadius: "15px",
              }}
              image={product?.image}
              alt="Paella dish"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <CardContent style={{ textAlign: "left" }}>
              <Typography
                style={{ fontWeight: 700, color: lightBlue[600] }}
                variant="h5"
                component="div"
              >
                {product?.name}
              </Typography>
              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="h6"
                component="div"
              >
                Varssion:{" "}
                <span style={{ fontSize: 16, color: "black" }}>
                  {product?.verssion}
                </span>
              </Typography>
              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="h6"
                component="div"
              >
                Breaking System:{" "}
                <span style={{ fontSize: 16, color: "black" }}>
                  {product?.breaking}
                </span>
              </Typography>
              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="h6"
                component="div"
              >
                Colour:{" "}
                <span style={{ fontSize: 16, color: "black" }}>
                  {product?.colour}
                </span>
              </Typography>
              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="h6"
                component="div"
              >
                Mileage:{" "}
                <span style={{ fontSize: 16, color: "black" }}>
                  {product?.mileage}
                </span>
              </Typography>
              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="h6"
                component="div"
              >
                Weight:{" "}
                <span style={{ fontSize: 16, color: "black" }}>
                  {product?.weight} kg
                </span>
              </Typography>
              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="h6"
                component="div"
              >
                Top-Speed:{" "}
                <span style={{ fontSize: 16, color: "black" }}>
                  {product?.topspeed} k/h
                </span>
              </Typography>
              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="h6"
                component="div"
              >
                Price:{" "}
                <span style={{ fontSize: 16, color: "black" }}>
                  {product?.price} Tk
                </span>
              </Typography>

              <Typography
                style={{ fontWeight: 700, color: lightGreen[600] }}
                variant="body2"
                color="text.secondary"
              >
                <span style={{ fontSize: 16, color: "gray" }}>
                  {product?.description}
                </span>
              </Typography>
              <Button
                sx={{ my: 3, backgroundColor: lightGreen[700] }}
                onClick={handleBookingOpen}
                variant="contained"
              >
                Booking Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{ margin: "100px", minWidth: 275, border: 0, boxShadow: 0 }}
          >
            <Typography variant="h6" component="div">
              {bookingSuccess && (
                <Alert severity="success">Booking successfully!</Alert>
              )}
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <BookingModal
        product={product}
        bookingOpen={bookingOpen}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Purchase;
