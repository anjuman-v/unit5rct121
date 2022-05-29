import { useState } from "react";
import React from "react";

export const APPContext = React.createContext();

function AppContextProvider({children}){

    const [state, setState] = useState("light");
    
    const toggleTheme = () => {
        state === "light" ? setState("dark") : setState("light")
    };

    return(
      <AppContext.Provider value={[state, toggleTheme]}>
          {children}
      </AppContext.Provider>  
    );
}

export default AppContextProvider