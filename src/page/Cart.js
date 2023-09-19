import React from "react";
import CheckoutProduct from "../component/CheckoutProduct";
import { useStateValue } from "../component/StateProvider";
import Subtotal from "../component/Subtotal";
import '../style/cart.css'


function Cart() {
    const [{basket}, dispatch] = useStateValue();

    return(
        <div className="cart">
            <div className="cart_left">
                <img className="cart_ad" src="" alt="" />

                <div>
                    <h2 className="cart_title">장바구니입니다</h2>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                    ))}
                </div>
            </div>

            <div className="cart_right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Cart;