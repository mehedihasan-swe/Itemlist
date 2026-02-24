import React from 'react'


export default function Secondpage({ setpage, page }) {
  return (
    <div className='container'>
      <h2 className='title-text'>Which Programming Language do you love?</h2>
      <div className='card_container mx-5'>
        <input type='text' />
      </div>
      <div className='btn_container prevnext'>
        <button className='btn-modal' onClick={() => setpage(prevPage => prevPage - 1)}>Prev</button>
        <button className='btn-modal' onClick={() => setpage(prevPage => prevPage + 1)}>Next</button>
      </div>
    </div>
  )
}
