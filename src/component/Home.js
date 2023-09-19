import React from "react";
import Product from "./Product";
import '../style/home.css'

function Home() {
    return(
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={process.env.PUBLIC_URL + 'logo192.png'} alt="LOGO" />

                <div className="home_row">
                    <Product id="2323" title="제품1" price={1000} image="img/product1.jpeg" rating={5}/>
                    <Product id="2324" title="제품2" price={2000} image="img/product4.jpg" rating={4}/>
                </div>
                <div className="home_row">
                    <Product id="2325" title="제품3" price={3000} image="img/product2.jpg" rating={3}/>
                    <Product id="2326" title="제품4" price={4000} image="img/product3.jpg" rating={2}/>
                </div>
                <div className="home_row">
                    <Product id="2327" title="제품5" price={5000} image="img/product4.jpg" rating={1}/>
                </div>
            </div>
        </div>
    )
}
export default Home;