import React, { useState } from 'react';
import { useGlobalCart } from '../../contexts/cart-context';

const Counter = () => {

    const { count, increment, decrement } = useGlobalCart()

    return (
        <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
