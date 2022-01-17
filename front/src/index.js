import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Components";
import {Provider} from "react-redux";
import {store} from "./Redux";
import LogIn from "./Components/Login";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

require("dotenv").config()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/login"} element={<LogIn/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
