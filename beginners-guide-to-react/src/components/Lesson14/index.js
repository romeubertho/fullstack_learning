import React, {useState, useEffect} from "react";


export default function Lesson14() {
    // Lesson 14 works with a lazy react useState. This is done by providing a function as the initial
    // value. This function will be called only when it's extremely necessary.
    // We can see below name state uses an arrow function, which simply return the initial value.
    // If we run it and open console, you will see it is called only to retrieve initial value
    // and not several time as Lesson13
    // Note msg state is the same as Lesson 13, i.e. it's not optimized!
    const [name, setName] = useState(() => {
        console.log('useState');
        return window.localStorage.getItem('name') || ''
    });
    console.log('rendered');
    useEffect(() => {
        window.localStorage.setItem('name', name);
    });
    const [msg, setMsg] = useState(window.localStorage.getItem('msg') || '');
    useEffect(() => {
        window.localStorage.setItem('msg', msg);
    });
    return (
        <div>
            <form>
                <label htmlFor='name'>Name:</label>
                <input id='name' value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
            <div>
                <form>
                    <label htmlFor='msg'>Message: </label>
                    <input id='msg' value={msg} onChange={(e) => setMsg(e.target.value)}/>
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