import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// Import ThirdWeb
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

//Include what chains you want support.
// 4 = Rinkeby
const supportedChainIds = [4];

//Include what types of wallet you want to support.
// In the case, we support Metamask which is an "injected wallet"
const connectors = {
  injected: {},
};

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
      
  </React.StrictMode>,
  document.getElementById("root")
);
