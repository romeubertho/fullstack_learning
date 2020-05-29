import React from "react";
import './styles.css'

const Box = (props) => {
    const {style, size, className, ...rest} = props;
    const sizeClassName = size ? `box--${size}` : '';
    return (
        <div {...props} className={`box ${className?className:''} ${sizeClassName}`}
             style={{fontStyle: 'italic', ...style}}
             {...rest}
        />
    )
};

const Box2 = (props) => {
    const {style, size, className=''} = props;
    const sizeClassName = size ? `box--${size}` : '';
    return (
        <div {...props} className={`box ${className} ${sizeClassName}`}
             style={{fontStyle: 'italic', ...style}}
        />
    )
};

export default function Lesson10() {
    return (
        <>
            <Box size='small' style={{backgroundColor: 'lightblue'}}>
                small lightblue box
            </Box>
            <Box size='medium' style={{backgroundColor: 'pink'}}>
                medium pink box
            </Box>
            <Box size='large' style={{backgroundColor: 'orange'}}>
                large orange box
            </Box>
            <Box2 size='medium' style={{backgroundColor: 'pink', fontStyle: 'normal'}} className='test'>
                medium pink box
            </Box2>
        </>
    )
}

