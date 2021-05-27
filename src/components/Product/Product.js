import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

function Product(props) {
    
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock-order soon</small></p>
                <br />
                <button
                     className='main-button'
                     
                     onClick={()=>props.handleAddproduct(props.product)}
                     >
                    

                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>


            </div>


        </div>
    )
}

export default Product
