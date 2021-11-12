import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({bookingOpen, handleBookingClose, product, setBookingSuccess}) => {
    const {user} = useAuth()
    const {email, displayName} = user;
    const initialBookingInfo = {clientName: user.displayName, email: user.email, phone: ''}
    
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = { ...bookingInfo }
        newBookingInfo[field] = value;
        // console.log(newBookingInfo)
        setBookingInfo(newBookingInfo);
    }


    const handleBooking = e =>{
       
        const order = {
            ...bookingInfo,
            productName: product?.name,
            productPrice: product?.price
        }
        
        // sent data to server 
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                setBookingSuccess(true)
                handleBookingClose()   
            }
        })

        handleBookingClose()
        e.preventDefault()
    }
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={bookingOpen}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={bookingOpen}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                    {product?.name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleBooking}>
                            <TextField
                            disabled
                            sx={{width: '90%', m: 1}}
                            id="outlined-size-small"
                            defaultValue={product?.name}
                            size="small"
                            />
                            <TextField
                            disabled
                            sx={{width: '90%', m: 1}}
                            id="outlined-size-small"
                            defaultValue={product?.price}
                            size="small"
                            />
                            <TextField
                            sx={{width: '90%', m: 1}}
                            id="outlined-size-small"
                            name="clientName"
                            onBlur={handleOnBlur}
                            defaultValue={displayName}
                            size="small"
                            />
                            <TextField
                            sx={{width: '90%', m: 1}}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={email}
                            size="small"
                            />
                            <TextField
                            sx={{width: '90%', m: 1}}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                            />
                            <Button type="submit" variant="contained">Booking</Button>
                        </form>
                        
                    </Typography>
                </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default BookingModal;