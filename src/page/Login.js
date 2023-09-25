import React from "react";
import '../style/login.css';
import {Link} from "react-router-dom";

function Login() {
    return(
        <div className="login">

            <Link to="/">
                <img className="login_logo" src={process.env.REACT_APP_PUBLIC_URL + 'logo512.png'} />
            </Link>
        </div>
    )
}

export default Login;