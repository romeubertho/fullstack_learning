import React from "react";
import PropTypes from 'prop-types' // npm install --save prop-types

const SayHello = (props) => {
    const {firstName, lastName} = props;
    return (
        <div>
            Hello {firstName} {lastName}!
        </div>
    )
};
// By adding it you make sure other guys who use your component don't screw up! But if they do,
// some warning will show up in browser if you are running it in dev-mode.
// if some prop are optional just take off isRequired
// prop-types page has details about more complex types like PropTypes.shape
SayHello.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

const SaySomething = (props) => {
    const {isNight, firstName, lastName} = props;
    return (
        <div>
            Have a good {isNight ? 'night' : 'day'}, {firstName} {lastName}!
        </div>
    )
};

SaySomething.propTypes = {
    isNight: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default function Lesson07() {
    return (
        <>
            <SayHello firstName='Romeu' lastName='Bertho Jr'/>
            <SayHello firstName='Juliana' lastName='Pessin'/>
            <SaySomething isNight={false} firstName='Romeu' lastName='Bertho'/>
            <SaySomething isNight={true} firstName='Juliana' lastName='Pessin'/>
        </>
    )
}