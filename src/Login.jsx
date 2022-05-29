import React , { useState, useEffect } from "react";
import avatar from '../src/assets/avatarr.svg'
function Login() {


    return (
        <>

            <div className="center">
                    <h2>Login Form</h2>
            <form>
                <div className="form-outline mb-4">
                    <label className="form-label" >Email </label>
                    <input type="email" className="form-control" placeholder="Enter your email"/>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" >Password</label>
                    <input type="password"  className="form-control" placeholder="Enter your password"/>
                </div>
                <div className="form-outline mb-4">
                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                </div>
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
            </form>
            </div>
        </>
    );
}
export default Login;
