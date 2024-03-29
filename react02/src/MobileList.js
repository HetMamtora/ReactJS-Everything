import React from 'react'
import './MobileList.css'


export default function MobileList(props){

    const {image,title,price} = props; //de-structuring

  return (
    <div className='main'>
        {console.log(props)}
        <img className='image' src={image} alt='iphone'/>
        <div>
            <h2>{title}</h2>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>

    </div>
  )
}