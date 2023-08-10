"use client";
import axios from "axios";

export const getPrediction = (data) => {
  const baseURL = "http://localhost:8000/";
  const logsEndpoint = "predict";

  return axios
    .post(`${baseURL}${logsEndpoint}`, data)
    .then((response) => response)
    .catch((error) => Promise.reject(error));
};

export default {
  getPrediction,
};
