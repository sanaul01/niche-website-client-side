import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Explore = ({product}) => {
    const {_id, name, description, image} = product
    return (
        
        <Card sx={{ my: 3, minWidth: 275, border: 0, boxShadow: 0, "&:hover": { boxShadow: 5 } }}>
            <CardMedia
                component="img"
                style={{width: 'auto', height: '200px', margin: '0 auto', borderRadius: "15px"}}
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
                <NavLink style={{margin:'0 auto', textDecoration: 'none'}} to ={`/purchase/${_id}`}>
                    <Button style={{ marginTop: "15px", backgroundColor: lightGreen[700] }} variant="contained" size="small">Purchase Now</Button>
                </NavLink>
            </CardContent>
        </Card>
    );
};

export default Explore;