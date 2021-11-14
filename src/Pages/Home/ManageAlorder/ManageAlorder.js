import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAlorder = () => {
    const [orders, setOrders] = useState();
    useEffect(()=>{
        fetch('https://arcane-dawn-96246.herokuapp.com/orders/id')
        .then(res => res.json())
        .then(data=> setOrders(data))
    }, [])

    return (
        <TableContainer component={Paper}>
            <h2>Total Order: {orders?.length}</h2>
      <Table sx={{ minWidth: 650 }} aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Price</TableCell>
            <TableCell align="right">Client Phone</TableCell>
            <TableCell align="right">Client Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.clientName}
              </TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.productPrice}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageAlorder;