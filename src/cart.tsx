import { useState } from 'react';



export default function Cart(){
    const [counter, setCounter] = useState(0);

    const increaseCount = ()=>{
        setCounter(counter+1);
    }
    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>Total item {counter}</p>
            <button onClick = {increaseCount}>Add</button>
        </div>
        
    )

}