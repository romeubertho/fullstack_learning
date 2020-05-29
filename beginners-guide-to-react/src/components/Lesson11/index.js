import React, {useState} from "react";

export default function Lesson11() {
    const [eventCount, setEventCount] = useState(0);
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');

    // Do we really need additional functions?
    // Note that when we set useState, we set the function to handle the change in the state variable too
    // Does it creating new functions to call setState functions instead of call it directly in user event
    // makes the code more readable?
    // function handleClick() {
    //     setEventCount(eventCount + 1)
    // }
    // This function has the event argument which React understand
    function handleChange(event) {
        setUsername(event.target.value)
    }
    // Note:
    // When you console.log() the "e" from event passed to setUsername and setText (line 41)
    // you will notice we get a SyntheticEvent object here, this is not the native event
    // the native event is this property called nativeEvent
    // SyntheticEvent is about some performance optimization React does for our events over DOM events
    // DOM events you will find by getting the nativeEvent property like e.nativeEvent
    // Synthetic event has pretty much all the same props as regular event, so that's what you are
    // typically going to use.
    return (
        <div>
            <p>
                There have been {eventCount} events.
            </p>
            <p>
                <button onClick={() => setEventCount(eventCount + 1)}>Click Me</button>
            </p>
            <p>
                you typed: {username}
            </p>
            <p>
                {/*
                handleChange(events) receives the event handler directly to the element, so
                we don't need to worry to write something like the line 47
                */}
                <input onChange={handleChange}/>
            </p>
            <p>Your text: {text}</p>
            <p>
                <input onBlur={(e) => setText(e.target.value)}/>
            </p>
        </div>
    )
}