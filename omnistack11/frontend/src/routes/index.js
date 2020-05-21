import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from "../components/Logon";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Logon}/>
            </Switch>
        </BrowserRouter>
    )

}