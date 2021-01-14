import React,{useContext,useState}  from 'react';
import {GameContext} from './context/GameContext';
import {questions} from './Questions';
import Question from './question';

export default function Quiz(){
    const {menu,setMenu,user,setUser}=useContext(GameContext);
    const [selectedOption,setSelectedOption]=useState();
    return(
        <div>
            <h1>Quiz</h1>
            {
                questions.map((question)=>(
                    <Question key={question.number} question={question} />
                ))
            }
        </div>
    )
}