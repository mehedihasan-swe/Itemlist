import React from 'react'
import codeabc from "../assets/codeabc.jpg"
import stacklearner from "../assets/stack.jpg"
import learnwithsumit from "../assets/learn with sumit.jpg"
export default function Thirdpage({ setpage, page }) {
    return (
        <div className='container'>
           
            <h2 className='title-text'>Which Programming CHannel do you Like?</h2>
            <div className='card_container'>
                <div className='card'>
                    <img src={codeabc} alt="codeabc" />
                    <p>Codeabc</p>
                </div>
                <div className='card'>
                    <img src={learnwithsumit} alt="learnwithsumit" />
                    <p>learn with sumit</p>
                </div>
                <div className='card'>
                    <img src={stacklearner} alt="stacklearner" />
                    <p>Stack learner</p>
                </div>
            </div>
            <div className='btn_container prevnext'>
                <button className='btn-modal' onClick={() => setpage(prevPage => prevPage - 1)}>Prev</button>
                <button className='btn-modal' onClick={() => setpage(prevPage => prevPage + 1)}>Next</button>
            </div>
        </div>
    )
}
