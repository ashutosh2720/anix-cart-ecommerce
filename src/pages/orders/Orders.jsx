import React from 'react'
import Orders from './Orders.css'
import { useGlobalCart } from '../../contexts/cart-context';
import { Link } from 'react-router-dom';


function Order() {
    const { myOrders } = useGlobalCart();
    return (
        <div className="my-orders-main">

            {myOrders.length ?
                (myOrders.map((order) =>
                    <div className="orders">
                        <b> <p>{order.title}</p></b>
                        <p>price: Rs/-{order.price}</p>
                        <p>Quantity : {order.quantity}</p>
                        <p>Address: {order.address.city}</p>

                    </div>)) : <div className="no-order-found">
                    <h1>No order Found </h1>
                    <Link to={'/shop'}>
                        <button className='go-to-shop' >Go to shop</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Order
