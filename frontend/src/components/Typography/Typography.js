import React from 'react'
import './Typography.css'
import PropTypes from 'prop-types'

function Typography(props) {

    const Component = props.tag;
    const ClassName = props.className;

    return (
        <Component className={ClassName} style={{align: props.align}}>
            {props.children}
        </Component>
    )
}

Typography.propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center']),
    children: PropTypes.node,
    className: PropTypes.string,
    headingSize: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'small', 'em', 'strong'])
}

Typography.defaultProps = {
    align: null,
    headingSize: null,
    className: '',
    tag: 'p',
};

export default Typography

