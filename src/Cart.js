import React from "react";
import Subtotal from "./Subtotal";
import '../src/cart.css'


function Cart() {
    return(
        <div className="cart">
            <div className="cart_left">
                <img className="cart_ad" src="" alt="" />

                <div>
                    <h2 className="cart_title">장바구니입니다</h2>

                    {/* 장바구니아이템 */}
                </div>
            </div>

            <div className="cart_right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Cart;