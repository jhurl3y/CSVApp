import * as React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const node = document.getElementById("main");
const data = node.dataset.react ? JSON.parse(node.dataset.react) : {};

ReactDOM.render(<App data={data} />, node);
