import { Grid } from '@mui/material';
import React from 'react';
import OrderReview from '../../../Home/OrderReview/OrderReview';

const DashbordHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

            </Grid>
            <Grid item xs={12} sm={6}>
                <OrderReview></OrderReview>
            </Grid>
        </Grid>
    );
};

export default DashbordHome;