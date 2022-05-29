import { useContext } from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import { Appcontext } from './components/ThemeContextProvider';

function App() {
  const [theme, toggleTheme] = useContext(Appcontext);

  return (
    
    <div className='App'>

      <Button text='Theme' />

      <button onClick={toggleTheme}>Toggle</button>

    </div>
  );
}


export default App;
