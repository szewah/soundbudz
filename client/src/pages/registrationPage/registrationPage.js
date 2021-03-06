import React from 'react';
import Registration from '../../components/registration/registration';

const RegistrationPage = () => {
    return(
        <div>
            <Registration/>
            <div className="container">
                <p style={{marginTop:"20px", textAlign: "center"}}>Already a member? 
                    <a href="/login"> Login here</a>
                </p>
            </div>
        </div>
    )
}

export default RegistrationPage;
