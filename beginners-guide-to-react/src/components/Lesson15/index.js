import React, {useState, useEffect} from "react";


export default function Lesson15() {
    // Lesson 15 is about the same as Lesson 14 except we are optimized useEffect
    // Note in console each useEffect is called only by its corresponding state, which in Lesson 13 and 14
    // this didn't happen.
    // But if you note there is a lot of repeated code below, is there by any chance something we can do
    // to make it a more lazy code style? Lesson 16 will address that.
    const [name, setName] = useState(() => {
        console.log('useState');
        return window.localStorage.getItem('name') || ''
    });
    console.log('rendered');
    useEffect(() => {
        window.localStorage.setItem('name', name);
        console.log(name);
    }, [name]);
    const [msg, setMsg] = useState(window.localStorage.getItem('msg') || '');
    useEffect(() => {
        window.localStorage.setItem('msg', msg);
        console.log(msg);
    }, [msg]);
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