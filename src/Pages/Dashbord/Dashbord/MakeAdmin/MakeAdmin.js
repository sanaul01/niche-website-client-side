import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [makeSuccess, setMakeSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleMakeAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setMakeSuccess(true)
                setEmail('')
                console.log(data)
            } 
        })
        e.preventDefault()
    }
    return (
        <>
            <h2>Make an admin</h2>
            <form onSubmit={handleMakeAdminSubmit}>
            <TextField
            sx={{width: '50%'}} 
            type="email"
            label="Email"
            onBlur={handleOnBlur}
            variant="standard" />
            <Button type="submit" variant="contained">Made Admin</Button>
            </form>
            {makeSuccess && <Alert severity="success">Admin made successfully!</Alert>}
        </>
    );
};

export default MakeAdmin;