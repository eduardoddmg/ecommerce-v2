import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App'
// import your route components too

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

