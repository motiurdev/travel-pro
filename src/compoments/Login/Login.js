import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
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
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center login-form">
                <div className="border h-50 d-flex align-items-center px-3">
                    <div>
                        <h3 className="text-center mb-4 header-title">Login With</h3>
                        <div>
                            <button onClick={handleGoogleLogin} className="loginGoogle"><i class="fab fa-google-plus-g fa-2x"></i> <span className="ms-2">Contine with Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;