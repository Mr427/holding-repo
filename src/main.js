import React from "react";
import ReactDom from"react-dom";
import Game from "./components/app";
import "./style/scss/main-style.scss"

const container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);

ReactDom.render(<Game />, container);
