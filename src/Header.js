import React from "react";
import '../src/header.css'
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue(); 

    return(
        <div className="header">
            <Link to='/'>
                <img className="header_logo" src={process.env.REACT_APP_PUBLIC_URL + 'logo512.png'} />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type='text' />
                <img src={process.env.REACT_APP_PUBLIC_URL + 'img/all.png'} alt='' className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요!</span>
                    <span className="header_optionLineTwo">로그인하기</span>
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
                    <img src={process.env.REACT_APP_PUBLIC_URL + ''} alt='' />
                    <Link to='/cart' className="header_optionLineBasket">{basket?.length}</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;