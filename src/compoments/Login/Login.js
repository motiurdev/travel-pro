import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'


const Login = () => {
    const { loginWithGoogle, user } = useFirebase()
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center login-form">
                <div className="border h-50 d-flex align-items-center px-3">
                    <div>
                        <h3 className="text-center mb-4 header-title">Login With</h3>
                        <div>
                            <button onClick={loginWithGoogle} className="loginGoogle"><i class="fab fa-google-plus-g fa-2x"></i> <span className="ms-2">Contine with Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;