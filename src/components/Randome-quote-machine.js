import React, { useState, useEffect } from 'react';

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch random quote from the API
  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  // Fetch a quote on component mount
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">
        <p>{quote}</p>
      </div>
      <div id="author" className="quote-author">
        <p>- {author}</p>
      </div>
      <div className="buttons">
        <button id="new-quote" onClick={fetchQuote}>New Quote</button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

export default RandomQuoteMachine;
