"use client";
import React, { createContext, useContext, useState } from "react";

const PredictionContext = createContext({ prediction: 0 });

export const PredictionProvider = ({ children }) => {
  const [prediction, setPrediction] = useState({ prediction: -1 });

  return (
    <PredictionContext.Provider value={{ prediction, setPrediction }}>
      {children}
    </PredictionContext.Provider>
  );
};

export const usePredictionContext = () => useContext(PredictionContext);
