import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import jacket from "../assets/jacket.jpg"
import iphone from "../assets/iphone.png"
import phone from "../assets/phone.jpg"
import apple from "../assets/apple.jpg"
import orange from "../assets/orange.jpg"
export default function Products() {

  const data = [

    {
      id: 1,
      title: "jacket",
      image: jacket,
      price: "1200",
      category:"Cloth"
    },
    {
        id: 2,
        title: "Iphone",
        image: iphone,
        price: "81200",
        category: "Phone"
    },
    {
        id: 3,
        title: "Iphone 10",
        image: phone,
        price: "90000",
        category: "Phone"
    },
    {
        id: 4,
        title: "Apple",
        image: apple,
        price: "180",
        category: "Fruit"
    },
    {
        id: 5,
        title: "Orange",
        image: orange,
        price: "180",
        category: "Fruit"
    },

  ]

  return (
    <div>
      <Navbar />
      <div className='parentcard'>
        <Cards data={data}/>
      </div>
   
    </div>
  )
}
