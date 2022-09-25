import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{ basket,user }, dispatch] = useStateValue();
    const showAlert =()=>{
        alert("Please Sign in first");
    }
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img className='mt-5' src={image} alt="" />
            <button onClick={user ? addToBasket : showAlert}>Add to Basket</button>
        </div>
    )
}

export default Product
