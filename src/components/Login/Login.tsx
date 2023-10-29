import React from "react";
import "./Login.scss";

const Login = () => {

    
    return(<>
        <div className="login-container">
            <div className="login-card">
                <div className="block bg-white">
                    <div><span className="first-title">Login</span></div>
                    <div><span className="sub-title">Sign In to your account</span></div>
                    <div><input type="text" name="username" id="username" value="" placeholder="Username"/></div>
                    <div><input type="password" name="password" id="password" value="" placeholder="Password"/></div>
                    <div className="btn-wrapper">
                        <input type="button" name="submit" id="submit" className="btn" value="Login" />
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <div className="block bg-blue"> 
                    <span className="second-title">Sign Up</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <input type="button" name="register" id="register" className="btn" value="Register Now!" />
                </div>
            </div>

        </div>
    </>);
}

export default Login;