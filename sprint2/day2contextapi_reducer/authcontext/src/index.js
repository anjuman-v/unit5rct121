import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContextProvider from "./components/AppContextProvider";

ReactDOM.render(
  <StrictMode>
    <AppContextProvider>
     

    </AppContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
