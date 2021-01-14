import React,{useContext}  from 'react';
import {GameContext} from './context/GameContext';

export default function Score(){
    console.log("naked diaries....")
    const {menu,setMenu,user,setUser,score,setScore}=useContext(GameContext);
    return(
        <div>
                <h1>{user}</h1>
                <h1>your score:  {score}/3</h1>
        </div>
    )
}