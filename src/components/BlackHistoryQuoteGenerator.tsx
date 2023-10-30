// File: src/components/BlackHistoryQuoteGenerator.tsx

import React from 'react';

// Define the shape of a quote object
interface Quote {
  id: string;
  author: string;
  quote: string;
}

// Define the props type for BlackHistoryQuoteGenerator
interface BlackHistoryQuoteGeneratorProps {
  quote: Quote;
  handleNewQuote: () => void;
}

// Define the BlackHistoryQuoteGenerator component
const BlackHistoryQuoteGenerator: React.FC<BlackHistoryQuoteGeneratorProps> = ({
  quote,
  handleNewQuote,
}) => {
  function handleButtonClick() {
    handleNewQuote(); // Call the handleNewQuote function passed down as a prop
  }

  return (
    <div className="quote-generator">
      <blockquote>
        &ldquo;{quote.quote}&rdquo; - {quote.author}
      </blockquote>
      <button type='submit' onClick={handleButtonClick}>Generate New Quote</button>
    </div>
  );
};

export default BlackHistoryQuoteGenerator;
