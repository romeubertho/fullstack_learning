import React, {useState} from "react";

// By calling updateTime function we call SetInterval to call update() every 1s and
// update time state in order to react rendering just the time changed instead of the
// entire content of our app.
export default function Lesson09() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function update() {
        setTime(new Date().toLocaleTimeString())
    }

    function updateTime(timeout) {
        setInterval(update, timeout)
    }

    return (
        <div>
            <input placeholder={time}/>
            {updateTime(1000)}
        </div>
    )
}