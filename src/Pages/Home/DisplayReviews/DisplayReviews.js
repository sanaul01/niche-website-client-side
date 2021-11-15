import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

const DisplayReviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(()=>{
        fetch('https://arcane-dawn-96246.herokuapp.com/reviews')
        .then(res =>res.json())
        .then(data =>{
            setReviews(data)
        })
    }, []);


    return (
        <>
        <h2>All Reviews</h2>
        <Grid container spacing ={2}>
            <Grid item xs={12} md={6} sx={{margin: '0 auto'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Client Name</TableCell>
                        <TableCell align="right">Client FeedBack</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {reviews?.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.clientName}
                        </TableCell>
                        <TableCell align="right">{row.review}</TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
        </Grid>
        </>
    );
};

export default DisplayReviews;