import React from 'react'

function BannerWrapper({children, ...restProps}) {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}

export default BannerWrapper