import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Quiz from './quiz';
import Menu from './menu';
import Score from './score';
import {GameContext} from './context/GameContext';

function App() {
  const[menu,setMenu]=useState('menu');
  const [user,setUser]=useState('');
  const [score,setScore]=useState(0);
  return (
   <>
      <GameContext.Provider value={{menu,setMenu,user,setUser,score,setScore}}>
      { menu==='menu' && <Menu/>}
      { menu==='play' && <Quiz/>}
      {menu==='score' && <Score/>}
      </GameContext.Provider>
   </>
  );
}

export default App;
