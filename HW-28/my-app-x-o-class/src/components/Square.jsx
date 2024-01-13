import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
    render() {
        const { value, onClick } = this.props;
        return (
            <button className="square" onClick={onClick}>
                {value}
            </button>
        );
    }
}

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O', null]),
    onClick: PropTypes.func,
};

export default Square;