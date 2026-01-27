import React, { useEffect, useState } from "react";

export const TypewriterEffect = ({ words, speed = 80, loop = true, pauseTime = 2000 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // If we've finished all words and loop is enabled, wait then restart
    if (wordIndex >= words.length && loop) {
      const resetTimeout = setTimeout(() => {
        setText("");
        setWordIndex(0);
        setCharIndex(0);
        setIsDeleting(false);
      }, pauseTime);
      return () => clearTimeout(resetTimeout);
    }

    // If we've finished all words and loop is disabled, stop
    if (wordIndex >= words.length && !loop) return;

    const timeout = setTimeout(() => {
      setText((prev) => prev + words[wordIndex].text.charAt(charIndex));
      setCharIndex(charIndex + 1);

      if (charIndex === words[wordIndex].text.length - 1) {
        setWordIndex(wordIndex + 1);
        setCharIndex(0);
        setText((prev) => prev + " ");
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex, words, speed, loop, pauseTime, isDeleting]);

  return (
    <h1 className="text-2xl  lg:text-4xl  sm:text-base md:text-lg font-bold mt-10 text-semibold text-neutral-900 dark:text-white">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
};
