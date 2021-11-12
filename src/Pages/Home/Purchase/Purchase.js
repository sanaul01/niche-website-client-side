import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Alert, Button, Grid} from '@mui/material';
import BookingModal from '../../Dashbord/BookingModal/BookingModal';

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState();
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);



    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res =>res.json())
        .then(data=>setProduct(data))
    }, []);
    
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{margin: "30px", minWidth: 275, border: 0, boxShadow: 0}}>
                        <CardMedia
                            component="img"
                            style={{width: 'auto', height: '200px', margin: '0 auto'}}
                            image={product?.image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {product?.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Varssion: {product?.verssion}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Breaking System: {product?.breaking}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Colour: {product?.colour}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Mileage: {product?.mileage}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Weight: {product?.weight}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Top-Speed: {product?.topspeed}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Price: {product?.price}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {product?.description}
                            </Typography>
                            <Button onClick={handleBookingOpen} variant="contained">Booking Now</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{margin: "100px", minWidth: 275, border: 0, boxShadow: 0}}>
                        <Typography variant="h6" component="div">
                            {bookingSuccess && <Alert severity="success">Booking successfully!</Alert>}
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