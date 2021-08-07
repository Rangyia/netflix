import React from 'react'
import './ButtonStyles.css'

function SelectorButton({ children, ...restProps }) {

    return (
        <div className="btn btn-selector" {...restProps}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default SelectorButton;

