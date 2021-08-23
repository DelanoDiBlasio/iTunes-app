import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "./Context";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </StrictMode>,
  rootElement,
);
