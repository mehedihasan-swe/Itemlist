import React from 'react'

export default function Adlist() {
    return (
        <form>
            <label>
                <span>Which progrraming languge do you like?</span>
                <input type="text" placeholder="your title" />
            </label>
            <label>
                <span>When did you start?</span>
                <input type="date"/>
            </label>
            <button>Submit</button>
        </form>
    )
}
