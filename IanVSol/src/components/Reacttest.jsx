'use client'

import {useState} from 'react';
import Hamburger from 'hamburger-react';

export default function Counter() {
    // const [count, setCount] = useState(initialCount)
    const [isOpen, setOpen] = useState(false)
    
    return (
        // <div className='text-white'>
        //     <h1>React Counter</h1>
        //     <div className='flex gap-1 '>
        //         <button className='bg-amber-200 text-black px-1 rounded-full hover:bg-red-500 hover:scale-105 transition-transform' onClick={() => setCount(count - 1)}>-</button>
        //         <p>Count: {count}</p>
        //         <button className='bg-amber-200 text-black px-1 rounded-full hover:bg-green-400 hover:scale-105 transition-transform' onClick={() => setCount(count + 1)}>+</button>
        //     </div>
        // </div>
        <div>
            <Hamburger toggle={isOpen} toggled={setOpen}/>
        </div>
    )
}