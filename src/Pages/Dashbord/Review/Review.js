import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const {user} = useAuth()
    const {email, displayName} = user;
    const initialReviewInfo = {clientName: user.displayName, email: user.email, review: '', phone: ''}

    const [reviewInfo, setReviewInfo] = useState(initialReviewInfo)

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newReviewInfo = { ...reviewInfo }
        newReviewInfo[field] = value;
        
        setReviewInfo(newReviewInfo);
    }

    const handleSubmit = e =>{
        const review ={
            ...reviewInfo
        }
        console.log(review)
        
    

        fetch('https://arcane-dawn-96246.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('added successfully')
            }
        })
        e.preventDefault();
    };
    
    return (
        <Box>
            <h2>Please inter your feedback</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                disabled
                sx={{width: '90%', m: 1}}
                id="outlined-size-small"
                defaultValue={displayName}
                size="small"
                />

                <TextField
                disabled
                sx={{width: '90%', m: 1}}
                id="outlined-size-small"
                defaultValue={email}
                size="small"
                />

                <TextField
                sx={{width: '90%', m: 1}}
                id="outlined-multiline-flexible"
                name="review"
                label="Your Comment"
                onBlur={handleOnBlur}
                size="small"
                />

                <TextField
                sx={{width: '90%', m: 1}}
                id="outlined-size-small"
                name="phone"
                label="phone"
                onBlur={handleOnBlur}
                size="small"
                />
                <br />
                <Button type="submit" variant="contained">submit</Button>
            </form>
        </Box>    
    );
};

export default Review;