import React,{useEffect, useState} from 'react'

const UseEffect = () => {

  const [clicked,setClicked] = useState();
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log('Inside useState');
  },[clicked,count]);

  return (
    <div>
        <h1>Use Effect Eg</h1>
        <button onClick={()=>setClicked('Click')}>Click</button> <br /> <hr />
        <button onClick={()=>setClicked('For')}>For</button> <br /> <hr />
        <button onClick={()=>setClicked('Surprise')}>Surprise</button> <br />
        <h1>{clicked}</h1>

        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffect