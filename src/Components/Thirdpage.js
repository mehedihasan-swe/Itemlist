import React from 'react'
import { thirdpageData } from './Data'

export default function Thirdpage({ setpage, page }) {
    return (
        <div className='container'>

            <h2 className='title-text'>Which Programming CHannel do you Like?</h2>
            <div className='card_container'>

                {
                    thirdpageData.map(items => (
                        <div className='card'>
                            <img src={items.img} alt={items.chanelname} />
                            <p>{items.chanelname}</p>
                        </div>

                    ))
                }
            </div>
            
            <div className='btn_container prevnext'>
                <button className='btn-modal' onClick={() => setpage(prevPage => prevPage - 1)}>Prev</button>
                <button className='btn-modal' onClick={() => setpage(prevPage => prevPage + 1)}>Next</button>
            </div>
        </div>
    )
}
