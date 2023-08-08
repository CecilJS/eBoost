import axios from "axios";

export const logRequest = (data) => {
  const baseURL = "http://localhost:8000/";
  const logsEndpoint = "logs";

  return axios
    .post(`${baseURL}${logsEndpoint}`, data)
    .then((response) => response)
    .catch((error) => Promise.reject(error));
};

export const retrieveLogs = () => {
  const baseURL = "http://localhost:8000/";
  const logsEndpoint = "get-logs";

  return axios
    .get(`${baseURL}${logsEndpoint}`)
    .then((response) => response)
    .catch((error) => Promise.reject(error));
};

export default {
  logRequest,
  retrieveLogs,
};

/***
 * Write a service that fetches data from the API
 * and returns the response to be displayed on the
 * frontend
 *
 * Write tests to verify the service behaves as expected
 *
 * Import this service in the right component and store the response in a local state to be
 * conditionally rendered in the UI
 */
