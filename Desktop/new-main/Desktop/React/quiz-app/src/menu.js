import React,{useContext}  from 'react';
import {GameContext} from './context/GameContext';

export default function Menu(){
    const {menu,setMenu,user,setUser}=useContext(GameContext);
    return(
        <div>
            <form>
                <label>
                    Enter your name:
                         <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} name="name" />
                </label>
                 <input type="submit" value="Start"  onClick={()=>setMenu('play')}/>
            </form>  
        </div>
    )
}