import { useState } from "react";


export default function batingScore(){
    const [score,updateScore] = useState(0);

    return (
        <div>
            <p>--------------------------------------</p>
            <h3>Score: {score}</h3>
            <button onClick={()=>{updateScore(score+1)}}>AddOne</button>
            <button onClick ={()=>{updateScore(score+4)}}>AddFour</button>
            <button onClick ={()=>{updateScore(score+6)}}>AddSix</button>
        </div>
    )
}