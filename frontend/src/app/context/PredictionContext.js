"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const PredictionContext = createContext(null);

export const PredictionProvider = ({ children }) => {
  const [prediction, setPrediction] = useState(null);
  const [hasPosted, setHasPosted] = useState(false);

  return (
    <PredictionContext.Provider
      value={{ prediction, setPrediction, hasPosted, setHasPosted }}
    >
      {children}
    </PredictionContext.Provider>
  );
};

export const usePredictionContext = () => useContext(PredictionContext);
