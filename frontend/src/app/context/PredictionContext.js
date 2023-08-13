"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const PredictionContext = createContext(null);

export const PredictionProvider = ({ children }) => {
  const [prediction, setPrediction] = useState(null);

  return (
    <PredictionContext.Provider value={{ prediction, setPrediction }}>
      {children}
    </PredictionContext.Provider>
  );
};

export const usePredictionContext = () => useContext(PredictionContext);
