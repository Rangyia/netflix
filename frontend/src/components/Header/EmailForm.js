import React from 'react'
import PropTypes from 'prop-types'

function EmailForm(props) {
    return (
        <div className="email-form-container">
            {props.children}    
            <div className="email-form-wrapper">
                <div className="email-form">
                    <label>
                        <input type="email" name="email" id="email-lookup" autoComplete="email" maxLength="50" minLength="5" />
                        <label for="email-lookup" className="placeLabel">Email address</label>
                    </label>
                </div>
                <div className="email-form-btn">
                    <button class="btn btn-label">
                        <span>Get Started</span>
                        <span>
                            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default EmailForm

