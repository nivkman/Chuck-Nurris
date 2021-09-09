import React, { useEffect, useState } from 'react'
import './index.css'
import JokeCard from '../JokeCard'

export default function RandomJoke() {

  const [randomJoke, setRandomJoke] = useState('');
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('-');


  const byCategory = (e) => {
    e.preventDefault();
    const q = category !== '-' ? `?category=${category}` : '';
    fetch(`https://api.chucknorris.io/jokes/random${q}`)
      .then(res => res.json())
      .then(json => setRandomJoke(() => {
        if (name !== '') {
          const regex = /Chuck Norris/i;
          return json.value.replace(regex, name.toString()).replace(regex, name.toString());
        }
        return json.value;
      }))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then(res => res.json())
      .then(json => setCategories(json))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="tabHeader">
        <form onSubmit={byCategory} className="form">
          <div>
            <span className="label"><b>Your name</b></span>
            <input type="text" className="input" placeholder="Chuck Norris" id="name" onChange={(e) => setName(e.target.value)} value={name} />
          </div>

          <div>
            <span className="label"><b>Categories</b></span>
            <select id="category" className="input" onChange={e => setCategory(e.target.value)}>
              <option value="-">All categories</option>
              {categories?.map((elm, index) => (
                <option key={index} value={elm}>{elm.charAt(0).toUpperCase() + elm.slice(1)}</option>
              )
              )}
            </select>
          </div>
          <div>
            <button>GO!</button>
          </div>
        </form>
      </div>
      {randomJoke ? (
        <JokeCard joke={randomJoke} />
      ) : null}
    </>
  )
}
