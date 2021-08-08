import React from 'react'
import './EmailFormStyles.css'
import { useMediaQuery } from 'react-responsive'
import api from '../../api'

function EmailForm(props) {
    
    const user = {
        email: ''
    }

    const handleChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        user.email = value;
    }

    const handleSubmit = async (email) => {
        if (email === '' || email === null || !email.includes('@'))
            return;

        const username = await api.get(`/users/${email}`).then(res => {
            return res.data;
        })
        console.log(username);
    }

    return (
        <div className="email-form-container">
            {props.children}    
            <div className="email-form-wrapper">
                <div className="email-form">
                    <label>
                        <input onChange={handleChange} className="email-text-field" placeholder="Email address" type="email" name="email" id="email-lookup" autoComplete="email" maxLength="50" minLength="5" />
                    </label>
                </div>
                <div className="email-form-btn" onClick={() => handleSubmit(user.email)}>
                    <span className="email-btn">
                        <span>Get Started</span>
                        <span>☰</span>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default EmailForm

