// File: src/components/BlackHistoryQuoteGenerator.tsx

interface Quote {
  id: string;
  author: string;
  quote: string;
}

interface BlackHistoryQuoteGeneratorProps {
  quote: Quote;
  handleNewQuote: () => void;
}

const BlackHistoryQuoteGenerator: React.FC<BlackHistoryQuoteGeneratorProps> = ({
  quote,
  handleNewQuote,
}) => {
  function handleButtonClick() {
    handleNewQuote();
  }

  return (
    <div className="flex flex-col items-center p-4">
      <blockquote className="text-headline mb-4 italic text-2xl text-center">
        {quote.quote} - <span className="text-button">{quote.author}</span>
      </blockquote>
      <button
        type="submit"
        onClick={handleButtonClick}
        className="bg-button text-buttonText px-4 py-2 rounded-lg font-bold hover:opacity-70 ease-in-out"
      >
        Generate New Quote
      </button>
    </div>
  );
};

export default BlackHistoryQuoteGenerator;
