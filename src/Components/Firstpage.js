import React from 'react'
import js from "../assets/js.png"
import php from "../assets/php.png"
import pythone from "../assets/pythone.jpg"
export default function Firstpage() {
    return (
        <div className='container'>
            <h2 className='title-text'>Which Programming Language do you love?</h2>
            <div className='card_container'>
                <div className='card'>
                    <img src={js} alt="javascript" />
                    <p>Javascrt</p>
                </div>
                <div className='card'>
                    <img src={php} alt="php" />
                    <p>Php</p>
                </div>
                <div className='card'>
                    <img src={pythone} alt="Pythone" />
                    <p>Pythone</p>
                </div>
            </div>
            <div className='btn_container prevnext'>
                <button className='btn-modal'>Prev</button>
                <button className='btn-modal'>Next</button>
            </div>
        </div>
    )
}
