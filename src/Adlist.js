import { useState } from "react"


export default function Adlist({ setShowModal, setdataItems }) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")


    const handlesubmit = (e) => {
        e.preventDefault()
           //new objects ekta jeta data arary te add hobe 
        const submitedList = {
            id: Date.now(),
            title:title,
            StartDate: date
        }
        setdataItems(prevState=>[...prevState, submitedList])
       setShowModal(false)
    }

    return (
        <form onSubmit={handlesubmit}>
            <label>
                <p>Which Programming do you like most?</p>
                <input type="text" placeholder='name' onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                <p>When did you start?</p>
                <input type='date' onChange={(e) => setDate(e.target.value)} />
            </label>
            <div>
                <button className="btn-modal">submit</button>
            </div>
            <div>
                <button className="btn-modal" onClick={(e) => setShowModal(false)} >Close Modal</button>
            </div>

        </form>
    )
}
