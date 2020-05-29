import React, {useState, useEffect} from "react";


export default function Lesson13() {
    // useEffect tells React the component needs to do something after rendering
    // in our case when some state variables do change and update in DOM is done
    // useEffect writes on local storage the variables name and msg.
    // When we load the page, we check if the localstorage variables are available, otherwise, states get ''
    // for first rendering (lines 10,15). The problem here is useState is not optimized, every
    // rendering useState is called, imagine if we are parsing a huge json variable, code will
    // not be so responsive! Lesson 14 will show a way to optimize it.
    // Note:
    // we have 2 useEffect in the code, whenever some render happens, both are called
    // but, if you are changing msg, why you want to call name useEffect? There is no purpose!
    // Lesson 15 you will see how we can handle unnecessary calls for useEffect.
    const [name, setName] = useState(window.localStorage.getItem('name') || '');
    useEffect(() => {
        window.localStorage.setItem('name', name);
        console.log(name)
    });
    const [msg, setMsg] = useState(window.localStorage.getItem('msg') || '');
    useEffect(() => {
        window.localStorage.setItem('msg', msg);
        console.log(msg)
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