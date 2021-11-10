import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({product}) => {
    const {name, description, image} = product
    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0}}>
            <CardMedia
                component="img"
                style={{width: 'auto', height: '80px', margin: '0 auto'}}
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
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Product;