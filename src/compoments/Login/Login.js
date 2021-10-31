import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { loginWithGoogle, user, setUser, setError, setIsLoading } = useAuth()
    const history = useHistory()
    const location = useLocation()

    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    window.scrollTo(0, 0)
    return (
        <div className="login-container">
            <div className="d-flex justify-content-center align-items-center login-form">
                <div className="h-50 d-flex align-items-center px-3 rounded shadow bg-white">
                    <div>
                        <h2 className="text-center mb-5 header-title">Login With</h2>
                        <div>
                            <button onClick={handleGoogleLogin} className="loginGoogle"><i className="fab fa-google-plus-g fa-2x"></i> <span className="ms-2">Contine with Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;