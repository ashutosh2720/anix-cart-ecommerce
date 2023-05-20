import React from 'react'
import CategoryProducts from '../../components/categoryProducts/CategoryProducts';
import '../home/main.css';


const Electronics = () => {
    return (
        <>
            <CategoryProducts
                category='laptops'
                title='laptops'
            />
            <CategoryProducts
                category='smartphones'
                title='smartphones'
            />
            <CategoryProducts
                category='lighting'
                title='lighting'
            />

        </>
    )
}

export default Electronics
