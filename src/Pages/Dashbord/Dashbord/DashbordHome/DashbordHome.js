import { Grid } from '@mui/material';
import React from 'react';
import OrderReview from '../../../Home/OrderReview/OrderReview';

const DashbordHome = () => {
    return (
        <Grid container spacing={1}>

                <OrderReview></OrderReview>
        </Grid>
    );
};

export default DashbordHome;