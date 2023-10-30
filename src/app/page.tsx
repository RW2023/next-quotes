'use client';
import { useState } from 'react';
import BlackHistoryQuoteGenerator from '@/components/BlackHistoryQuoteGenerator';

export default function Home() {
  const [quote, setQuote] = useState('');

  interface QuoteData {
    content: string; // Assuming the quote content is a string
  }
  

  const handleNewQuote = async () => {
    const response = await fetch('https://api.quotable.io/random?tags=history');
    const data: QuoteData = await response.json(); // Type annotation to ensure compatibility with QuoteData interface
    setQuote(data.content);
  };
  

  return (
    <div>
      <h1 className="text-center text-headline text-xl p-2 mx-0">Home</h1>
      <BlackHistoryQuoteGenerator quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
}
