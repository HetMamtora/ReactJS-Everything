import React from 'react'
import MobileList from './MobileList'
import mobiles from './mobiles.json'

export default function Mobile(){
    
  return (
    <div>

        {mobiles.map((element)=>{
            return <MobileList 
                    image={element.image} 
                    title={element.title} 
                    price={element.price}
                    />
        })}
     
    </div>
  )
}