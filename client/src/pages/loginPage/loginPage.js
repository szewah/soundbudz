import React from 'react';
import Login from '../../components/login/login';


function LoginPage() {
    return (
        <div>
            <Login></Login>
            <div className="container">
                <p style={{marginTop:"20px"}}>Don't have an account? Register here</p>
            </div>
        </div>
    )
}



export default LoginPage;
