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

export const getPredictionResults = () => {
  const baseURL = "http://localhost:8000/";
  const logsEndpoint = "latest_prediction_result";

  return axios
    .get(`${baseURL}${logsEndpoint}`)
    .then((response) => response)
    .catch((error) => Promise.reject(error));
};

export const postPredictionResults = (data) => {
  const baseURL = "http://localhost:8000/";
  const logsEndpoint = "prediction_results";

  return axios
    .post(`${baseURL}${logsEndpoint}`, data)
    .then((response) => response)
    .catch((error) => Promise.reject(error));
};
export default {
  getPrediction,
  getPredictionResults,
  postPredictionResults,
};
