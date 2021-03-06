import React from 'react';

function Logo({children, ...restProps}) {
    return (
        <div className="logo-container">
            <a href="/" {...restProps}>
                {children}
                <img className="logo" href="/" src="./images/misc/logo.svg" alt="Netflix logo" />
            </a>
        </div>
    );
}

export default Logo;
