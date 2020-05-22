import React from "react";

const Message1 = props =>
    <div className='message'>
        {props.msg}
    </div>

const Message2 = props =>
    <div className='message2'>
        {props.children}
    </div>

function Message3(props) {
    return (
        <div className='message3'>
            {props.children}
        </div>
    )
}

export default function Message() {
    return (
        <>
            <Message1 msg='Hello World!'/>
            <Message2>
                Goodbye world with fragment!
            </Message2>
            <Message3>
                Hello again!!
            </Message3>
        </>
    )
}