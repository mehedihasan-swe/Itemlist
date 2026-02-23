import React from 'react'

export default function Preview() {
    return (
        <div className='container'>
            <div className="progress">
                <div className="progress-bar" style={{ width: "30%" }}></div>
            </div>
            <h2 className='title-text'>Preview Your Survey</h2>
            <div className='card_container-preview'>
                <div className='card-q'>
                    <p><span>Question:</span>Which Programming Language do you love?</p>
                    <p><span>Answere:</span>Javascript</p>
                </div>
                <div className='card-q'>
                    <p><span>Question:</span>How many years of experiences of you?</p>
                    <p><span>Answere:</span>Javascript</p>
                </div>
                <div className='card-q'>
                    <p><span>Question:</span>Your favourite channel</p>
                    <p><span>chanel:</span></p>
                    <p><span>chanel:</span></p>
                    <p><span>chanel:</span></p>
                </div>
            </div>
            <div className='btn_container prevnext'>
                <button className='btn-modal'>Prev</button>
                <button className='btn-modal'>Next</button>
            </div>
        </div>
    )
}
