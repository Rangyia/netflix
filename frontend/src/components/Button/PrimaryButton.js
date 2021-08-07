import React from 'react'
import './ButtonStyles.css'

function PrimaryButton({children, ...restProps}) {
    return (
        <a className="btn btn-primary" {...restProps}>
            {children}
        </a> 
    )
}

export default PrimaryButton;

