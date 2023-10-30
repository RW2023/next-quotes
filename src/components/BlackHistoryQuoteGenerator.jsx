import React, { useState } from 'react';
import blackHistoryQuotes from '@/data/blackHistoryQuotes';

export function BlackHistoryQuoteGenerator({ quote, handleNewQuote }) {
  const [currentQuote, setCurrentQuote] = useState(quote);

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * blackHistoryQuotes.length);
    return blackHistoryQuotes[randomIndex];
  }

  function handleButtonClick() {
    const randomQuote = generateRandomQuote();
    setCurrentQuote(randomQuote);
    handleNewQuote(randomQuote); // Assuming `handleNewQuote` updates the quote state in the parent component
  }

  return (
    <div className="quote-generator">
      <blockquote>
        &ldquo;{currentQuote.quote}&rdquo; - {currentQuote.author}
      </blockquote>
      <button onClick={handleButtonClick}>Generate New Quote</button>
    </div>
  );
}

export default BlackHistoryQuoteGenerator;
