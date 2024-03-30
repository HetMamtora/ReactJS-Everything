import React from 'react'
//import { GreetContext, Greet2Context } from './A'
import { GreetContext,Greet2Context } from './A'
import { useContext } from 'react'


export default function C() {
    const useCon = useContext(GreetContext)
    const useCon2 = useContext(Greet2Context)
  return (
    <h1>Greet: {useCon} {useCon2}</h1>
  )
}


// {/* <GreetContext.Consumer>
// {
//     (val)=>{
//         return(
//             <Greet2Context.Consumer>
//                 {
//                     (val2)=>{
//                         return  <h1>Greet: {val} {val2}</h1>
//                     }
//                 }
//             </Greet2Context.Consumer>
//         )
//     }
// }
// </GreetContext.Consumer> */}