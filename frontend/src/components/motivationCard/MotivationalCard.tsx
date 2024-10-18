"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motivationalQuotes } from "./../../app/DATA/motivationalQuotes";

const MotivationalCard = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % motivationalQuotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-purple-100 border-2 my-10 mt-10 border-purple-300 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
      <div className="relative w-full h-64">
        <Image
          src="/assets/images/motivation.jpg"
          alt="motivation"
          className="object-cover"
          layout="fill"
        />
      </div>
      <div className="p-4 flex-1">
        <h2 className="text-2xl font-semibold mb-2">Motivation</h2>
        <p className="text-gray-700 mb-4">{motivationalQuotes[quoteIndex]}</p>
      </div>
    </div>
  );
};

export default MotivationalCard;
