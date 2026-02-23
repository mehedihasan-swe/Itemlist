import React from 'react'

export default function Secondpage() {
  return (
    <div className='container'>
      <h2 className='title-text'>Which Programming Language do you love?</h2>
      <div className='card_container mx-5'>
        <input type='text'/>
      </div>
      <div className='btn_container prevnext'>
        <button className='btn-modal'>Prev</button>
        <button className='btn-modal'>Next</button>
      </div>
    </div>
  )
}
