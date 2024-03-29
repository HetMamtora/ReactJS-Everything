import React from 'react'
import MobileList from './MobileList'

const book1 = {
     image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70',
     title: 'Apple iPhone 15 Pro',
     price: '₹129999'
}

export default function Mobile(){
  return (
    <div>
        <MobileList image={book1.image} title={book1.title} price={book1.price}/>
    </div>
  )
}

