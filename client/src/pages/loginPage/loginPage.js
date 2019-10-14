import React from 'react';
import Login from '../../components/login/login';


const LoginPage = () => {
    return (
        <div>
            <Login></Login>
            <div className="container">
            <p id="logintext" style={{marginTop:"20px", textAlign:"center"}}>Don't have an account?                     
                <a href="/registration"> Register here</a>
            </p>
            </div>
        </div>
    )
}



export default LoginPage;
