import React from 'react'

export default function Cards({ data }) {
  return (
    <div className='pructs-cards'>
      {
        data.map(item => (
          <div key={item.id} className='card'>
            <img src={item.image} alt="jacket" />
            <div className='desbox'>
              <p className='title'>{item.title}</p>
              <p className='price'>Price:<span>{item.price}</span></p>
            </div>
          </div>
        ))

      }
    </div>
  )
}
