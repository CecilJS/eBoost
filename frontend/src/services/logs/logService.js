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
  const logsEndpoint = "get_logs";

  return axios
    .get(`${baseURL}${logsEndpoint}`)
    .then((response) => response)
    .catch((error) => Promise.reject(error));
};

export default {
  logRequest,
  retrieveLogs,
};
