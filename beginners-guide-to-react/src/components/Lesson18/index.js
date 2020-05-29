import React, {useEffect, useState} from "react";
import './style.css'
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';

const Child = (props) => {
    const {setShowInfo} = props;
    const [counter, setCounter] = useState(() => 0);
    useEffect(() => {
        setShowInfo(counter)
    }, [counter, setShowInfo]);

    return (
        <div>
            <Button color='primary' variant='contained'
                    onClick={() => {
                        setCounter(prevState => prevState + 1)
                        // Below, setShowInfo does not work properly because it can get
                        // the value of our counter's prevState, in order to fix that
                        // we moved setShowInfo inside useEffect (line 12)
                        // This way we can guarantee setShowInfo will update properly
                        // because it will be called after rendering.
                        // setShowInfo(counter)
                    }}
            >
                {counter}
            </Button>
        </div>
    )
};
Child.propTypes = {
    setShowInfo: PropTypes.func.isRequired,
};

export default function Lesson18() {
    const [showChild, setShowChild] = useState(() => false);
    const [showInfo, setShowInfo] = useState(() => 'something');

    useEffect(() => {
        setShowInfo('something')
    }, [showChild]);

    return (
        <Container>
            <Box m='5px' p='10px' display='flex' justifyContent="center" alignItems="center"
                 flexDirection="column"
            >
                <Box>
                    <Checkbox onChange={(e) => setShowChild(e.target.checked)}/>
                    {showInfo}
                </Box>
                {showChild ? (
                    <>
                        <div className='child'>
                            <Box pt={2}>
                                <Child setShowInfo={setShowInfo}/>
                            </Box>
                        </div>
                        <div className='child'>
                            <Box pt={2}>
                                <Child setShowInfo={setShowInfo}/>
                            </Box>
                        </div>
                    </>
                ) : null}
            </Box>
        </Container>
    )
}