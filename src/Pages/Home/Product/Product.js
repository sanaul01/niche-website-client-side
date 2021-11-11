import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {id, name, description, image} = product
    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0}}>
            <CardMedia
                component="img"
                style={{width: 'auto', height: '200px', margin: '0 auto'}}
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <NavLink style={{margin:'0 auto', textDecoration: 'none'}} to ={`/purchase/${id}`}>
                    <Button variant="contained" size="small">Purchase Now</Button>
                </NavLink>
            </CardContent>
        </Card>
    );
};

export default Product;