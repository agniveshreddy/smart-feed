import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Pages

import LoginUser from "components/LoginUser";

const Router = () =>{
    return(
        <BrowserRouter>
           <div className='main'>
                <Route exact path="/" component={LoginUser}/>
            </div>
        </BrowserRouter>);
};

export default Router;