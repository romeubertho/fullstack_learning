import React, {useState} from "react";

export default function Lesson12() {
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <div>
            <form>
                <label htmlFor='name'>Name: </label>
                <input id='name' onChange={(e) => setName(e.target.value)}/>
            </form>
            {name ? <strong>Hello {name}!</strong> : 'Please type your name'}
            <div>
                <form>
                    <label htmlFor='msg'>Message: </label>
                    <input id='msg' onChange={(e) => setMsg(e.target.value)}/>
                </form>
                {
                    msg ?
                        <strong>
                            Message:
                            <div>{msg}</div>
                        </strong>
                        : 'Please type your message'
                }
            </div>
        </div>
    )

}