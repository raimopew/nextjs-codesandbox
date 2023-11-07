'use client'
import { useState, useEffect } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)    

    const modifyCounter = amount => setCounter(previousCounter => previousCounter + amount)

    useEffect(() => {
        console.log({ counter })
    }, [counter, setCounter])

    return (<>
        <div>Counter: { counter }</div>
        <button onClick={() => modifyCounter(+1)}>+1</button>
        <button onClick={() => modifyCounter(-1)}>-1</button>
        { [50, -50, +100, -100].map(element => (
            <button key={element} onClick={() => modifyCounter(element)}>{element}</button>
        )) }
    </>)
}
