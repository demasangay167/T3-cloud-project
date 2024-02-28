"use client"

import { useState } from "react"

export default function State () {
    const [name, setName] = useState('sangay');
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName('dema');
    }

    return (
        <div className="">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
