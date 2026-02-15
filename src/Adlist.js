import React, { useState } from 'react'

export default function Adlist({setList}) {
    const [title, settile]=useState('');
    const [date, setDate]=useState('');
    const handlsubmit= (e)=>{
          e.preventDefault()
        const submitedList = {
            title,
            StartDate: date,
            id: Date.now()
        }
       setList(prevState => [...prevState, submitedList])

    }

    
    return (
        <form onSubmit={handlsubmit}>
            <label>
                <span>Which progrraming languge do you like?</span>
                <input onChange={(e)=>settile(e.target.value)} type="text" placeholder="your title" />
            </label>
            <label>
                <span>When did you start?</span>
                <input type="date" onChange={(e)=>setDate(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    )
}
