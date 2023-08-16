"use client";
import React from "react";
import axios from "axios";
import {
  getPrediction,
  getPredictionResults,
  postPredictionResults,
} from "../../services/prediction/PredictionService";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";

jest.mock("axios");

describe("PredictionService", () => {
  it("should return the correct response for getPrediction service", async () => {
    const expectedEndpoint = "http://localhost:8000/predict";
    const data = {
      UDI: 0,
      Air_temperature: 0,
      Process_temperature: 0,
      Rotational_speed: 0,
      Torque: 0,
      Tool_wear: 0,
      TWF: 0,
      HDF: 0,
      PWF: 0,
      OSF: 0,
      RNF: 0,
    };
    const mockPredictionRespsonse = { prediction: 0 };
    axios.post = jest.fn().mockImplementation(() => {
      return Promise.resolve({ data: mockPredictionRespsonse });
    });

    await getPrediction(data);

    expect(axios.post).toHaveBeenCalledWith(expectedEndpoint, data);
  });

  it("should return the correct response for postPredictionResults service", async () => {
    const expectedEndpoint = "http://localhost:8000/prediction_results";
    const data = { prediction: 0 };
    const mockPredictionRespsonse = "200 OK";

    axios.post = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockPredictionRespsonse);
    });

    await postPredictionResults(data);

    expect(axios.post).toHaveBeenCalledWith(expectedEndpoint, data);
  });

  it("should return the correct response for getPredictionResults service", async () => {
    const expectedEndpoint = "http://localhost:8000/latest_prediction_result";
    const mockPredictionResponse = {
      prediction: 0,
    };
    axios.get.mockResolvedValue(mockPredictionResponse);

    const response = await getPredictionResults();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(expectedEndpoint);
    expect(response).toEqual(mockPredictionResponse);
  });
});
