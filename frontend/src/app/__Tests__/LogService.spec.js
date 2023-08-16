"use client";
import React from "react";
import axios from "axios";
import { logRequest, retrieveLogs } from "../../services/logs/LogService";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";

jest.mock("axios");

describe("LogService", () => {
  it("should return the correct response for LogRequest service", async () => {
    const expectedEndpoint = "http://localhost:8000/logs";
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

    await logRequest(data);

    expect(axios.post).toHaveBeenCalledWith(expectedEndpoint, data);
  });

  it("should return the correct response for retrieveLogs service", async () => {
    const expectedEndpoint = "http://localhost:8000/get_logs";
    const mockPredictionResponse = {
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
    axios.get.mockResolvedValue(mockPredictionResponse);

    const response = await retrieveLogs();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(expectedEndpoint);
    expect(response).toEqual(mockPredictionResponse);
  });
});
