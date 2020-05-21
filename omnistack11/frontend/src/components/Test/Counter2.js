import React from "react";
import {Button} from "@material-ui/core";
import Header from "./Header";

export default class Counter2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // here we are not using
            counter: 0
        }
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const {counter}=this.state
        return (
            <div>
                <Header>Contador 2: {counter} </Header>
                <Button variant='contained' color="secondary"
                        onClick={() => this.increment()}>{this.state.counter}</Button>
            </div>
        );
    }
}