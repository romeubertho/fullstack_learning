import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Welcome from '../components/Welcome'
import Lesson04 from "../components/Lesson04";
import Lesson05 from "../components/Lesson05";
import Lesson06 from "../components/Lesson06";
import Lesson07 from "../components/Lesson07";
import Lesson08 from "../components/Lesson08";
import Lesson09 from "../components/Lesson09";
import Lesson10 from "../components/Lesson10";
import Lesson11 from "../components/Lesson11";
import Lesson12 from "../components/Lesson12";
import Lesson13 from "../components/Lesson13";
import Lesson14 from "../components/Lesson14";
import Lesson15 from "../components/Lesson15";
import Lesson16 from "../components/Lesson16";
import Lesson17 from "../components/Lesson17";
import Lesson18 from "../components/Lesson18";

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
                <Route path='/lesson10' component={Lesson10}/>
                <Route path='/lesson11' component={Lesson11}/>
                <Route path='/lesson12' component={Lesson12}/>
                <Route path='/lesson13' component={Lesson13}/>
                <Route path='/lesson14' component={Lesson14}/>
                <Route path='/lesson15' component={Lesson15}/>
                <Route path='/lesson16' component={Lesson16}/>
                <Route path='/lesson17' component={Lesson17}/>
                <Route path='/lesson18' component={Lesson18}/>
            </Switch>
        </BrowserRouter>
    )
}