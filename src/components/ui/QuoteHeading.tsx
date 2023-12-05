import React, { FC } from 'react';

interface QuoteHeadingProps {
  quoteText: string;
  author: string;
}

const toTitleCase = (text: string): string =>
  text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
  );

const QuoteHeading: FC<QuoteHeadingProps> = ({
  quoteText,
  author,
}): JSX.Element => {
  const authorTitleCase = toTitleCase(author);

  return (
    <h2 className="col-span-full text-center text-3xl font-bold mb-4 mt-1 text-paragraph m-1">
      {quoteText} <span className="font-bold">{authorTitleCase}</span>
    </h2>
  );
};

export default QuoteHeading;
