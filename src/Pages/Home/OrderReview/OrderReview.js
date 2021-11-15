import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const OrderReview = () => {
    const {user, token} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const url = `https://arcane-dawn-96246.herokuapp.com/orders?email=${user.email}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    // Delete Order
    const handleDeleteOrder = id =>{
        const proced = window.confirm('Are you sure to delete order?');
        if(proced){
            const url = `https://arcane-dawn-96246.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                alert("Deleted Successfully")
                const remainingOrder = orders.filter(order => order._id !== id)
                setOrders(remainingOrder);
            }
        })
        }

    }


    return (
        <>
            <h2>My Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450}} aria-label="OderView table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Phone Number</TableCell>
                        <TableCell align="right">email</TableCell>
                        <TableCell align="right">Delete Order</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.clientName}
                        </TableCell>
                        <TableCell align="right">{row.productName}</TableCell>
                        <TableCell align="right">TK {row.productPrice}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">
                                <Button onClick={()=>handleDeleteOrder(row._id)}>X</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default OrderReview;