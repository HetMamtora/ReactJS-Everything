import React from 'react'
import B from './B';
import { createContext } from 'react';

const GreetContext = createContext();
const Greet2Context = createContext();

export default function A() {
    const greet = "Hello";
    const greet2 = "Hello2";
  return (
    <div>
        <h1>A</h1>
        <GreetContext.Provider value={greet}>
        <Greet2Context.Provider value={greet2}>
            <B />    
        </Greet2Context.Provider>
        </GreetContext.Provider>
        
    </div>
  )
}

export {GreetContext,Greet2Context}
