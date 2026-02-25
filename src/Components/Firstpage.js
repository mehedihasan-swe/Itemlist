import React from 'react'
import { firstpageData } from './Data'

export default function Firstpage({ setpage, surveyData, setsurveyData }) {
    return (
        <div className='container'>

            <h2 className='title-text'>Which Programming Language do you love?</h2>
            <div className='card_container'>
                {
                    firstpageData.map(items => (
                        <div className='card' style={{border:surveyData.language === items.name ? "2px solid gray":""}} onClick={()=>setsurveyData({...surveyData, language:items.name})}>
                            <img src={items.img} alt={items.chanelname} />
                            <p>{items.name}</p>
                        </div>
                    ))
                }


            </div>
            <div className='btn_container prevnext'>
                <button className='btn-modal'>Prev</button>
                <button className='btn-modal' onClick={() => setpage(prevPage => prevPage + 1)}>Next</button>
            </div>
        </div>
    )
}
