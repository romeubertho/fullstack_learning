import React from "react";
import PropTypes from 'prop-types'

const Characters = (props) => {
    const {text} = props;
    return (
        <div>
            {`The text "${text}" has `}
            {text.length ? <strong>{text.length}</strong> : 'No'}
            {' characters'}
        </div>
    )
};

Characters.propTypes = {
    text: PropTypes.string.isRequired,
};

export default function Lesson08() {
    return (
        <>
            <Characters text='Lalalalala'/>
            <Characters text=''/>
        </>
    )
}