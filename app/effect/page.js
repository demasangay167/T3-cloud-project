"use client"
import { useEffect } from "react"
// export default function Effect () {
//     // const [text ,setText]
//     return (
//         <div>HI</div>
//     )
// }
 import React,{ useState, UseEffect} from "react"
 const UseEffects1 = () => {
    const [count, setCount] = useState(0);
 useEffect(() => {

 });
 console.log("Kuzuzangpo");
 return (
    <div>
        <h1>{count}</h1>
        <button className="bts" onClick={
            ()=> setCount(count +1)
        } >Click</button>
        
    </div>
 )
}
export default UseEffects1