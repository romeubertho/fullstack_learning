import React, {useState, useEffect} from "react";
import {Formik, Form, Field} from "formik";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
// Lesson 16 is about creating reusable custom hooks
// In our previous lesson, we saw how we create useEffect for each state variable
// Now, let's do a function that handles all the dirty work in a very simple way
// It creates a custom hook that gets data from our localStorage and with our
// desired useEffect (common for all state variables), which is write it in
// localStorage, but remember, each useEffect should be in place only when
// a particular state changes, that's why we set the deps (line 17)
// To avoid calling multiple times the initial state we are using an arrow function
// on useState as well. Everything we saw so far is below in this code, except
// by propTypes that is used for a Component
const useLocalStorageState = (key, defaultValue = '') => {
    const [state, setState] = useState(() => {
        return window.localStorage.getItem(key) || defaultValue
    });
    useEffect(() => {
        // console.log(key, defaultValue);
        window.localStorage.setItem(key, state)
    }, [key, state]);

    return [state, setState]
};

// Just a test with formik

const NewForm = (props) => {

    const getInitialValues = () => {
        const {name = '', email = '', msg = ''} = JSON.parse(window.localStorage.getItem('record'));
        const values = {};
        values.name = name;
        values.email = email;
        values.msg = msg;
        console.log(window.localStorage.getItem('record'));
        console.log(values);
        return values
    };

    const handleSubmit = (values) => {
        const {name = '', email = '', msg = ''} = values;
        const variables = {};
        variables.name = name;
        variables.email = email;
        variables.msg = msg;
        window.localStorage.setItem('record', JSON.stringify(variables))
    };

    const validate = (values) => {
        const {email} = values;
        const errors = {};
        if (!email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors
    };
    return (
        <Container maxWidth='sm' color='background.paper'>
            <Typography component='div' style={{
                backgroundColor: '#cfe8fc',
            }}>
                <Box m='5px' p='10px' bgcolor="success.main">
                    <Formik
                        initialValues={getInitialValues()}
                        validate={validate}
                        onSubmit={handleSubmit}
                    >
                        {({values, errors, touched, handleChange}) => {
                            // const formikProps = {values, errors, touched, handleChange};
                            return (
                                <Box display='flex' justifyContent="center" alignItems="center">
                                    <Form>
                                        <div>
                                            <Field name='name' placeholder='name'/>
                                        </div>
                                        <div>
                                            <Field type='email' name='email' placeholder='email'/>
                                        </div>
                                        <div>
                                            <Field name='msg' placeholder='message'/>
                                        </div>
                                        <Button color='primary' variant='contained' type='submit'>
                                            Update
                                        </Button>
                                    </Form>
                                </Box>
                            )
                        }}
                    </Formik>
                </Box>
            </Typography>
        </Container>
    )
};

export default function Lesson16() {
    const [name, setName] = useLocalStorageState('name');
    const [msg, setMsg] = useLocalStorageState('msg');
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
            <p/>
            <NewForm/>
        </div>
    )

}