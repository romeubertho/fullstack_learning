import React from "react";

export default function Lesson04() {
    const children = 'Hello Lesson04!';
    const className = 'container';
    const props = {children, className};
    // We added an additional prop id and we spread the props into our element
    const element1 = <div id='lesson04' {...props}/>;
    // overriding className properties is done after we spread those props
    const element2 = <div id='lesson04-2' {...props} className='container2'/>;
    return (
        // <></> = <React.Fragment></React.Fragment>
        <>
            {/*Rendering two elements side-by-side is possible by calling React.Fragment,
            otherwise, you should add element1 and element2 inside some html-tag like:
            <div>{element1}</>
            <div>{element2}</div>
            */}
            {element1}
            {element2}
        </>
    )

}
