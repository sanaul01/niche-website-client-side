import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Explore = ({product}) => {
    const {_id, name, description, image} = product
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
                <NavLink style={{margin:'0 auto', textDecoration: 'none'}} to ={`/purchase/${_id}`}>
                    <Button variant="contained" size="small">Purchase Now</Button>
                </NavLink>
            </CardContent>
        </Card>
    );
};

export default Explore;