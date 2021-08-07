import React from 'react'

function Navbar({children, ...restProps}) {
    return <nav {...restProps}>{children}</nav>
}

export default Navbar;
