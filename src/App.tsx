import './App.css'
import Cart from './cart';
import Batter from './Batter';
import User from './Users';
import { Suspense } from 'react';

const userDataPromise = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
    {/* <button onClick={()=>buttonClick(67)}>Click Me</button>
    {/* Event  Handling*/}
    {/* <Cart></Cart>
    <Batter></Batter> */} 


    <Suspense fallback={<p>Loading...</p>}>
        <User userDataPromise = {userDataPromise()}></User>
    </Suspense>

    </>
  )
}

export default App
