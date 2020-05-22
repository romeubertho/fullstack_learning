import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Welcome from '../components/Welcome'
import Lesson04 from "../components/Lesson04";
import Lesson05 from "../components/Lesson05";
import Lesson06 from "../components/Lesson06";
import Lesson07 from "../components/Lesson07";
import Lesson08 from "../components/Lesson08";
import Lesson09 from "../components/Lesson09";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Welcome}/>
                <Route path='/lesson04' component={Lesson04}/>
                <Route path='/lesson05' component={Lesson05}/>
                <Route path='/lesson06' component={Lesson06}/>
                <Route path='/lesson07' component={Lesson07}/>
                <Route path='/lesson08' component={Lesson08}/>
                <Route path='/lesson09' component={Lesson09}/>
            </Switch>
        </BrowserRouter>
    )
}