import * as React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import FileView from "./components/fileView";
import { Route, BrowserRouter as Router } from "react-router-dom";

const node = document.getElementById("main");
const data = node.dataset.react ? JSON.parse(node.dataset.react) : {};

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={() => <App data={data} />} />
            <Route path="/:filename" component={FileView} />
        </div>
    </Router>
);

ReactDOM.render(routing, node);
