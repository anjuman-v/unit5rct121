import  "./App.css";
import * as React from 'react'
import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { Counter } from "./components/Counter";
import { GitHub } from "./components/Github";



function App() {
  const [theme, toggleTheme] = useContext(AppContext);

  
  return (
    <div className="App">

      <h1>hello</h1>

      <Button text='THEME'/>

      <br></br>

      <button onClick={toggleTheme}>TOGGLE</button>
      <Counter/>
      <GitHub/>
    </div>
  );
}


export default App

