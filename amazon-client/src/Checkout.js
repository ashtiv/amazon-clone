import React from 'react'
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from 'react-router-dom'
import Subtotal from './Subtotal';
import { useHistory } from "react-router-dom";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="checkout row">
            <div className="checkout__left col-9">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>Your Shopping Basket lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
                            Continue shopping on the  <Link to="/">homepage.</Link> </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping Basket</h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket?.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
