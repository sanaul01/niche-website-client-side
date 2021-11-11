import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {productId} = useParams()
    return (
        <div>
            <h2>Purchase now: {productId}</h2>
        </div>
    );
};

export default Purchase;