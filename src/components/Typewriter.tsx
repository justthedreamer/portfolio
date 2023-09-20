import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  textToAnimate: string;
  delay?: number;
  animationSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  textToAnimate,
  delay = 0,
  animationSpeed = 100,
}) => {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;

    const startAnimation = () => {
      const interval = setInterval(() => {
        if (currentIndex <= textToAnimate.length) {
          setDisplayText(textToAnimate.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, animationSpeed); // Prędkość animacji

      return () => clearInterval(interval);
    };

    if (delay > 0) {
      setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
  }, [textToAnimate, delay, animationSpeed]);

  return (
    <>
        {displayText}
    </>
  );
}

export default Typewriter;
