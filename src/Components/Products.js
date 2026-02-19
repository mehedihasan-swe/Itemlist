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
      img: "./img",
      price: "1200",
      category:"Cloth"
    },
    {
        id: 2,
        title: "Iphone",
        img: iphone,
        price: "81200",
        category: "Phone"
    },
    {
        id: 3,
        title: "Iphone 10",
        img: phone,
        price: "90000",
        category: "Phone"
    },
    {
        id: 4,
        title: "Apple",
        img: apple,
        price: "180",
        category: "Fruit"
    },
    {
        id: 5,
        title: "Orange",
        img: orange,
        price: "180",
        category: "Fruit"
    },

  ]

  return (
    <div>
      <Navbar />
      <Cards />
    </div>
  )
}
