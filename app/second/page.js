"use client"

import { useState } from "react"

import {evaluate} from 'mathjs'

export default function Home() {
	const [ans, setAns] = useState("")
    const [input,setInput] = useState('')
    function Answer(){
     return evaluate(input)
    }
	
	return (
	<div className="text-center p-0 border-5 w-72 text-white-900" >
        <div className="text-4xl mx-10 border-2 text-rose-400">
            Calculator
        </div>
        <div className="border-2 mx-10 h-7 text-rose-400">
            {input}
        </div>
        <div className="border-2 mx-10 mb-2 h-7 text-rose-400">
            {ans}
        </div>
        <div className="grid grid-cols-4 mx-10"> 
            <button className="border-2" onClick={() => setInput(input +"1")} >1</button>
            <button className="border-2" onClick={() => setInput(input +"3")}>3</button>
            <button className="border-2" onClick={() => setInput(input +"+")}>+</button>
            <button className="border-2" onClick={() => setInput(input +"4")}>4</button>
            <button className="border-2" onClick={() => setInput(input +"5")}>5</button>
            <button className="border-2" onClick={() => setInput(input +"6")}>6</button>
            <button className="border-2" onClick={() => setInput(input +"-")}>-</button>
            <button className="border-2" onClick={() => setInput(input +"2")}>2</button>
            <button className="border-2" onClick={() => setInput(input +"7")}>7</button>
            <button className="border-2" onClick={() => setInput(input +"8")}>8</button>
            <button className="border-2" onClick={() => setInput(input +"9")}>9</button>
            <button className="border-2" onClick={() => setInput(input +"*")}>*</button>
            <button className="border-2" onClick={() => setInput("", setAns(""))}>Delete</button>
            <button className="border-2" onClick={() => setInput(input +"0")}>0</button>
            <button className="border-2" onClick={() => setAns(Answer())}>=</button>
            <button className="border-2" onClick={() => setInput(input +"/")}>/</button>
        </div>
    </div>
	)
}