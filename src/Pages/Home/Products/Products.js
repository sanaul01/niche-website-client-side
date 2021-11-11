import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';
import Typography from '@mui/material/Typography';

const products = [
    {
        id: 1,
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
        id: 2,
        name: 'Yamaha MT-15',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 140,
        topspeed: 155,
        price: 545000,
        image: 'https://i.ytimg.com/vi/VPEQx8m15W0/maxresdefault.jpg',
        description: 'Yamaha is an international brand. Yamaha is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 3,
        name: 'Yamaha XSR-155',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 142,
        topspeed: 155,
        price: 545000,
        image: 'https://ic1.maxabout.us/autos/tw_india//Y/2020/5/yamaha-xsr155-front-3-quater-view.jpg',
        description: 'Yamaha is an international brand. Yamaha is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 4,
        name: 'Honda CBR-150',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black,Red-White',
        mileage: '40 to 50',
        weight: 145,
        topspeed: 155,
        price: 550000,
        image: 'https://www.banglamotor.net/images/honda/honda-cbr150r-f02.jpg',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 5,
        name: 'Yamaha CB-150R',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 145,
        topspeed: 155,
        price: 550000,
        image: 'https://www.banglamotor.net/images/honda/honda-cb-150r-exmotion-real-image1.jpg',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 6,
        name: 'Honda Stritfire',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 138,
        topspeed: 142,
        price: 350000,
        image: 'https://www.motorbeam.com/wp-content/uploads/2021-Honda-CB150R-Streetfire-Fury-Matte-Red-1200x675.jpg',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 7,
        name: 'Honda CB-125r',
        verssion: 'Indo, Thai',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 143,
        topspeed: 130,
        price: 350000,
        image: 'https://i.ytimg.com/vi/_BdwkqYodqw/maxresdefault.jpg',
        description: 'Honda is an international brand. Honda is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 8,
        name: 'Suzuki Gixer-150',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 142,
        topspeed: 155,
        price: 450000,
        image: 'https://qph.fs.quoracdn.net/main-qimg-8b0dc65ad379302b62b7badd0e8e640b',
        description: 'Suzuki is an international brand. Suzuki is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 9,
        name: 'Suzuki GSXR-155',
        verssion: 'Indo, Thai, Indian',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 145,
        topspeed: 155,
        price: 450000,
        image: 'https://www.bikebd.com/wp-content/uploads/2020/12/suzuki-gsx-r150-yellow.jpg',
        description: 'Suzuki is an international brand. Suzuki is one of the brand among the top ten brand, This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 10,
        name: 'Taro GP-ONE v3',
        verssion: 'Chainis',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 160,
        topspeed: 145,
        price: 360000,
        image: 'https://amarprice.com/wp-content/uploads/Taro-GP-1-Sports.jpg',
        description: 'Taro Gp-one is an chainis brand. This is the beautiful bike. This bike has most powerful engine and gorgeous looks and design.'
    },
    {
        id: 11,
        name: 'Tero GP-TWO',
        verssion: 'Chainis',
        breaking: 'Duel cheanel ABS',
        colour: 'Red, Blue, Black',
        mileage: '40 to 50',
        weight: 155,
        topspeed: 140,
        price: 330000,
        image: 'https://www.bdprice.com.bd/wp-content/uploads/2020/04/TARO-GP-2-Front.jpg',
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
                        key={product.id}
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