import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res =>res.json())
        .then(data=>setProduct(data))
    }, []);

    const handleonBlur= e =>{
        
        e.preventDefault()
    }

    const handleAddedOrder = e =>{
        e.preventDefault()
    }
    
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
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0}}>
                <Typography variant="h5" component="div">
                    Order Product
                </Typography>
                <form onSubmit={handleAddedOrder}>
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Product Name" 
                        type="name"
                        name="name"
                        onBlur={handleonBlur}
                        variant="standard" />
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Price" 
                        type="name"
                        name="name"
                        onBlur={handleonBlur}
                        variant="standard" />
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Name" 
                        type="name"
                        name="name"
                        onBlur={handleonBlur}
                        variant="standard" />
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Email" 
                        type="email"
                        name="name"
                        onBlur={handleonBlur}
                        variant="standard" />
                    
                    <Button sx={{width: '75%', m: 1}} type="submit" variant="contained">Order Now</Button>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Purchase;