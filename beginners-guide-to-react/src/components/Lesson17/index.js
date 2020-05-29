import React, {useEffect, useRef, useState} from "react";
import './style.css'
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import VanillaTilt from "vanilla-tilt";

const Tilt = (props) => {
    const {children} = props;
    const tiltRef = useRef();
    useEffect(() => {
        const tiltNode = tiltRef.current;
        const vanillaTiltOptions = {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
        };
        VanillaTilt.init(tiltNode, vanillaTiltOptions);
        return () => {
            tiltNode.vanillaTilt.destroy()
        }
    }, []);

    return (
        <div ref={tiltRef} className='tilt-root'>
            <div className='tilt-child'>
                {children}
            </div>
        </div>
    )
};

export default function Lesson17() {
    const [showTilt, setShowTilt] = useState(false);
    const [bgColor, setBgColor] = useState('primary.main')
    return (
        <Container>
            <Box m='5px' p='10px' bgcolor={bgColor} display='flex' justifyContent="center" alignItems="center"
                 flexDirection="column">
                <Box>
                    <Checkbox onChange={(e) => {
                        setShowTilt(e.target.checked)
                        setBgColor(bgColor === 'primary.main' ? 'success.main' : 'primary.main')
                    }}
                              checked={showTilt}
                    />
                    Show tilt
                </Box>
                <Box pt={2}>
                    {showTilt ? (
                        <Tilt>
                            <div className='totally-centered'>vanilla-tilt.js</div>
                        </Tilt>
                    ) : null}
                </Box>
            </Box>
        </Container>
    )
}