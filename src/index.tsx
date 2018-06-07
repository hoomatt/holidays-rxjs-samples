import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

import "./index.css";

ReactDOM.render(
    <BrowserRouter basename={window.location.pathname}>
        <App />
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
);


