import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner1 from '../../../images/banner2.webp'


const Banner = () => {
    return (
        <Container sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                   <img style={{width: '350px'}} src={banner1} alt="" /> 
                </Grid>
                <Grid item sx={{textAlign: 'left', height: '250px', marginTop: '80px'}} xs={12} md={5}>
                    <Typography variant="h4">
                        Please <br /> Use Healmet For Safty
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, color: 'gray'}}>
                        Bike is an interestion and attractive vehical. But it can be because of dead of life unless you ride sefly.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;