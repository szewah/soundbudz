import React from 'react';
import Registration from '../../components/registration/registration';

function RegistrationPage() {
    return(
        <div>
            <Registration/>
            <div className="container">
                <p style={{marginTop:"20px"}}>Already a member? 
                    <a href="/login"> Login here</a>
                </p>
            </div>
        </div>
    )
}

export default RegistrationPage;
