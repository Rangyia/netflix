import React from 'react'
import PropTypes from 'prop-types'

function CardBackground(props) {

    return (
        <div className="bg-card-img">
            
        </div>
    )
}

CardBackground.propTypes = {
    className: PropTypes.string,
    background: PropTypes.bool,
    zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CardBackground.defaultProps = {
    className: '',
    background: '#000',
    zIndex: 0,
}

export default CardBackground

