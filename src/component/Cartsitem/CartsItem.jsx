import React, { useContext } from 'react'
import './Cartsitem.css'
import { ShopContext } from '../../contextApi/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
function CartsItem() {
    const { all_product,countTotalAmount, getItem, removetoCart } = useContext(ShopContext)
    return (
        <div className='cartitem'>
            <div className="cart-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (getItem[e.id] > 0) {
                    return <div>
                        <div className="carts-item-format cart-format-main">
                            <img src={e.image} className='cart-icon-producitem' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartsitem-quantity'>{getItem[e.id]}</button>
                            <p>${e.new_price*getItem[e.id]}</p>
                            <img src={remove_icon} className='cartitem-remove-icon' onClick={() => removetoCart(e.id)} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartsitem-total">
                    <h1>Cart total</h1>\
                    <div>
                        <div className="cart-item-total-item">
                            <p>Subtotal</p>
                            <p>${countTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <h3>Total</h3>
                            <h3>${countTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECK OUT</button>
                </div>
                <div className="cartitems-promo-codes">
                    <p>if you have promocode , Enter it here </p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartsItem
