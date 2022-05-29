import  "./App.css";
import * as React from 'react'
import { useContext } from "react";
import { Github }  from "./components/Github"



function App() {
  const [theme, toggleTheme] = useContext(AppContext);

  
  return (
    <div className="App">

     <Github/>
    </div>
  );
}


export default App

