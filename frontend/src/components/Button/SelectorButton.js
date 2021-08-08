import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './ButtonStyles.css'

function SelectorButton(props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="btn-container">
            <button onClick={handleButtonClick} type="button" className="btn btn-selector">
                {props.children[0]}
                ☰
            </button>
            {
                isOpen && (
                    <div className="selector-dropdown">
                        <ul className="dropdown-list">
                            {Object.entries(props.options).map((entry) => {
                                return (
                                    <li key={entry[0]} className="list-item">{entry[1]}</li>
                                );
                            })}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

SelectorButton.propTypes = {
    children: PropTypes.node,
    options: PropTypes.object,
}

SelectorButton.defaultProps = {
    children: null,
    options: []
}

export default SelectorButton;

