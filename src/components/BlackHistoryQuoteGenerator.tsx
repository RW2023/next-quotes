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
      <div className="mr-3 quote-generator p-6 bg-background rounded-lg shadow-lg flex flex-col border drop-shadow-lg w-full med:w-1/2 m-auto">
      <blockquote className="text-headline mb-4 italic text-2xl">
        &ldquo;{quote.quote}&rdquo; - <span className="text-main font-bold">{quote.author}</span>
      </blockquote>
      <button 
      type='submit'
        onClick={handleButtonClick} 
        className="bg-button text-buttonText px-4 py-2 rounded-lg font-bold  btn-wide hover:opacity-70 ease-in-out m-auto"
      >
        Generate New Quote
      </button>
    </div>
  );
};

export default BlackHistoryQuoteGenerator;
