import React from "react";
import '../src/header.css'
import {Link} from "react-router-dom";

function Header() {
    return(
        <div className="header">
            <img className="header_logo" src={process.env.REACT_APP_PUBLIC_URL + 'logo512.png'} />

            <div className="header_search">
                <input className="header_searchInput" type='text' />
                <searchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요!</span>
                    <Link to='/' className="header_optionLineTwo">home</Link>
                    <Link to='/cart' className="header_optionLineTwo">cart</Link>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">반가워요</span>
                    <span className="header_optionLineTwo">구독과좋아요</span>
                </div>

                <div className="header_optionBasket">
                    <shoppingBasket />
                    <span className="header_optionLineBasket">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;