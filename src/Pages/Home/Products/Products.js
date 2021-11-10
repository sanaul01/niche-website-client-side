import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';
import Typography from '@mui/material/Typography';

const products = [
    {
        name: 'Yamaha R15v4',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 145,
        topspeed: 155,
        price: 550000,
        image: 'https://bd.gaadicdn.com/processedimages/yamaha/r15-v4/640X309/r15-v46149ad0290847.jpg',
        description: 'Yamaha is an international brand. Yamaha is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Yamaha MT-15',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 140,
        topspeed: 155,
        price: 545000,
        image: '',
        description: 'Yamaha is an international brand. Yamaha is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Yamaha XSR-155',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 142,
        topspeed: 155,
        price: 545000,
        image: '',
        description: 'Yamaha is an international brand. Yamaha is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Honda CBR-150',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black,Red-White',
        mileage: '40 to 50',
        weight: 145,
        topspeed: 155,
        price: 550000,
        image: '',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Yamaha CB-155R',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 145,
        topspeed: 155,
        price: 550000,
        image: '',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Honda Stritfire',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 140,
        topspeed: 145,
        price: 350000,
        image: '',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Honda CB-125r',
        verssion: 'Indo, Thai',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 143,
        topspeed: 130,
        price: 350000,
        image: '',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Suzuki Gixer-150',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 142,
        topspeed: 155,
        price: 450000,
        image: '',
        description: 'Suzuki is an international brand. Suzuki is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Suzuki GSXR-155',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 145,
        topspeed: 155,
        price: 450000,
        image: '',
        description: 'Yamaha is an international brand. Yamaha is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Taro GP-ONE v3',
        verssion: 'Chainis',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 160,
        topspeed: 145,
        price: 360000,
        image: '',
        description: 'Taro Gp-one is an chainis brand. This is the beautiful bike. This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        name: 'Tero GP-TWO',
        verssion: 'Chainis',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 155,
        topspeed: 140,
        price: 330000,
        image: '',
        description: 'Taro Gp-one is an chainis brand. This is the beautiful bike. This bike has most powerful engine and gorgeous looks and design.'
    },
]

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{fontWeight: 600, mb: 5, color: 'error.main'}}>
                    OUR PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Product 
                        key={product.name}
                        product={product}
                        ></Product>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;