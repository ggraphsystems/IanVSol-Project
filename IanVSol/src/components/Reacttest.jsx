import React, {useState} from 'react'

export default function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount)
    
    return (
        <div>
            <h1>React Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}