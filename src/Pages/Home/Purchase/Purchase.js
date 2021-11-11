import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res =>res.json())
        .then(data=>setProduct(data))
    }, [])
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0}}>
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
                        
                            <Button variant="contained" size="small">Purchase Now</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0}}>
                <Typography variant="h5" component="div">
                    Order Product
                </Typography>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Purchase;