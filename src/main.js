const React = require("react");
const ReactDom = require("react-dom");
const App = require("./components/app");
import "./style/scss/main-style.scss"
/*
const styleHeader = document.createElement("link");
styleHeader.setAttribute("rel", "stylesheet");
styleHeader.setAttribute("link", "./src/style/css/main-style.css");
document.head.appendChild(styleHeader);
*/

const container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);

ReactDom.render(<App />, container);
