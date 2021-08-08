import React from 'react'
import PropTypes from 'prop-types'
import './CardStyles.css'

function Card(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>         
    )
}

Card.propTypes = {
    className: PropTypes.string,
    alignImg: PropTypes.oneOf(['left', 'right'])
}

Card.defaultProps = {
    className: 'card'
}

export default Card