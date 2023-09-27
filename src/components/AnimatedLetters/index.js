import React, { useState, useEffect } from 'react';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIdx < strArray.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        // Reset to 0 if we've reached the end of the array
        setCurrentIdx(0);
      }
    }, 400); // 5 seconds in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIdx, strArray.length]);

  return (
    <span className='sizeS'>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {i >= currentIdx && i < currentIdx + strArray.length && strArray[i - currentIdx]}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
