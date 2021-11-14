import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data.products))
    }, [])


    const handleDeleteProduct = id =>{
      const proced = window.confirm('Are you sure to delete order?');
      if(proced){
          const url = `http://localhost:5000/products/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
              if(data.deletedCount > 0){
              alert("Deleted Successfully")
              const remainingProduct = products.filter(product => product._id !== id)
              setProducts(remainingProduct);
          }
      })
      }

  }


    return (
        <TableContainer component={Paper}>
          <Typography variant="h4" sx={{marginBottom: '20px'}}>
                  Total Products: {products?.length}
          </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Verieant</TableCell>
            <TableCell align="right">Breaking</TableCell>
            <TableCell align="right">Add Products</TableCell>
            <TableCell align="right">Delet Products</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">TK {row.price}</TableCell>
              <TableCell align="right">{row.verssion}</TableCell>
              <TableCell align="right">{row.breaking}</TableCell>
              <TableCell align="right">
                <NavLink style={{textDecoration: 'none'}} to="/addedProduct">
                  <Button>Add</Button>
                </NavLink>
              </TableCell>
              <TableCell align="right">
                <Button onClick={()=>handleDeleteProduct(row._id)}>delete</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageProducts;