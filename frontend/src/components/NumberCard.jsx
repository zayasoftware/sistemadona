import React from 'react';

const NumberCard = ({ numbers, spinning }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      {numbers.map((num, index) => (
        <div key={index} className={`w-16 h-16 bg-green-500 flex items-center justify-center text-4xl font-bold rounded-lg ${spinning ? 'animate-spin' : ''}`}>
          {spinning ? '?' : num}
        </div>
      ))}
    </div>
  );
};

export default NumberCard;