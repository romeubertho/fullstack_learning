import React, {useState} from "react";
import {Button} from '@material-ui/core';
import Header from "./Header";

export default function Counter() {
    const [counter, setCounter] = useState(0); // const [ variable, function] = useState( initial state )

    function increment() {
        setCounter(counter + 1); // we call the set counter to increment counter variable as a state
    //    For performance reasons and best practices, we can't never change states directly, if you do that you won't see any update in your screen!!
    }

    return (
        <div>
            <Header>Counter: {counter}</Header>
            <Button variant='contained' color="primary" onClick={() => increment()}>Increment</Button>
        </div>
    )
}