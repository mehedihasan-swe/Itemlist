import React, { useState } from 'react'

export default function Navbar({ categoryname, data, setallData }) {
  let [cname,setCname]=useState("");

  const catname = (name) => {
   
    const filterdatacat = data.filter(items => items.category === name)
     setCname(name);
    setallData(filterdatacat);
    console.log(filterdatacat);

    if (filterdatacat.length) {
      setallData(filterdatacat)
    } else {
      setallData(data)
    }

    console.log(cname);
  }

  return (
    <div className='navbar'>
      <div className='item' onClick={() => catname("")} style={{ backgroundColor: cname === "" ? "rgb(28, 164, 155)" : "" }}>
        All
      </div>
      {
        categoryname.map((name, index) => (
          <div className='item' key={index} onClick={() => catname(name)} style={{ backgroundColor: name === cname ? "rgb(28, 164, 155)" : "" }}>
            {name}
          </div>
        ))
      }
    </div>
  )
}
