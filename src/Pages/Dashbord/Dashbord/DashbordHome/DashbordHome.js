import { Grid } from '@mui/material';
import React from 'react';
import banner from '../../../../images/banner1.webp'

const DashbordHome = () => {
    return (
        <Grid container spacing={1}>
            <img src={banner} alt="" />
        </Grid>
    );
};

export default DashbordHome;