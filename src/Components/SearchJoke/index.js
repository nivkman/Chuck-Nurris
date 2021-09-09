import React, { useState } from 'react'
import JokesTable from '../JokesTable'
import './index.css'

export default function SearchJoke() {
    const [keywords, setKeywords] = useState('')
    const [jokes, setJokes] = useState([])

    const search = (e) => {
        e.preventDefault();
        fetch(`https://api.chucknorris.io/jokes/search?query=${keywords}`)
            .then(res => res.json())
            .then(json => setJokes(json.result))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="tabHeader">
                <form onSubmit={search} className="form">
                    <div>
                        <span className="label"><b>Key word(s)</b></span>
                        <input type="text" className="input" style={{ "width": "400px" }} placeholder="Broken" id="name" onChange={(e) => setKeywords(e.target.value)} value={keywords} />
                    </div>
                    <div>
                        <button>GO!</button>
                    </div>
                </form>
            </div>
            <JokesTable jokes={jokes} />
        </>
    )
}