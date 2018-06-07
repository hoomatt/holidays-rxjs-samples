import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { App } from "./app";

import "./index.css";

ReactDOM.render(
    <HashRouter basename={window.location.pathname}>
        <App />
    </HashRouter>,
    document.getElementById("root") as HTMLElement
);


