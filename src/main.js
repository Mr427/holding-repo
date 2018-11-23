const React = require("react");
const ReactDom = require("react-dom");
const App = require("./components/app");

const container = document.createElement("div");
document.body.appendChild(container);

ReactDom.render(<App />, container);
