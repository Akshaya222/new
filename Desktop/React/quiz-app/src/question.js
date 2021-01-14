import React,{useContext,useState}  from 'react';
import {GameContext} from './context/GameContext';
import Score from './score';

export default function Question(question){
    const {menu,setMenu,user,setUser,score,setScore}=useContext(GameContext);
    console.log(question.question);
   // const {number,question,optionA,optionB,optionC,optionD,answer}=props;
    const [selectedOption,setSelectedOption]=useState();
    const submithandle=(e)=>{
        e.preventDefault();
        console.log(selectedOption);
       if(selectedOption==question.question.answer){
            setScore(score+1);
        }
        if(question.question.number==3){
            console.log("come on lets get naked....");
            setMenu('score');
        }
    }
    return(
        <div>
             <h4>{question.question.question}</h4>
            <div onChange={(e)=>{setSelectedOption(e.target.value)}}>
                  <input type="radio" value="optionA" name="answer" /> {question.question.optionA}
                  <input type="radio" value="optionB" name="answer" /> {question.question.optionB}
                  <input type="radio" value="optionC" name="answer" /> {question.question.optionC}
                  <input type="radio" value="optionD" name="answer" /> {question.question.optionD}
            </div>
            <input type="submit" value="Start"  onClick={submithandle}/>
        </div>
    )
}