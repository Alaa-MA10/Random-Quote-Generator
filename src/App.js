
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')

  useEffect(() => {
    getQuote()
  },[]);


  const getQuote = ()=>{
    const quotes = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

    axios.get(quotes)
    .then( (res)=>{
      // get random quote, then set (Quote and author)
      const quotes_len = res.data.quotes.length;

      const rand_num = Math.floor(Math.random()*quotes_len)
      const rand_quote = res.data.quotes[rand_num]

      setQuote(rand_quote.quote);
      setAuthor(rand_quote.author);
     })
  }

  // get random-color for body-background and quote-color
  const randomColor = ()=>{
    const color = `rgba(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      0.7)`;
    return color;
  }

  const rand_color = randomColor()

  return(
    <React.Fragment>
      <div className='quote-box' style={{backgroundColor: rand_color}}>

        <div className='card'>

          <h1 className='quote' style={{color: rand_color}}>" {quote} "</h1>
          <sub className='auth'>- {author}</sub>
          <br/>

          <button className='next-quote' onClick={getQuote}>
            <span>Give Me Advice!</span>
          </button>

        </div>

      </div>
    </React.Fragment>
  )
}

export default App;
