import { Grid, Typography } from '@mui/material';
import React from 'react';


const NotFound = () => {
    return (
        <Grid>
            <Typography variant="h2" gutterBottom component="div">
                404 <br /> Page Not Found
            </Typography>
        </Grid>
    );
};

export default NotFound;