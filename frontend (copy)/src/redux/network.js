import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

function* network(customConfig = {}) {
  const { authenticated, firebase, ...config } = customConfig;

  if (!config.data) config.data = {};

  const response = yield axios({
    baseURL: API_BASE_URL,
    ...config
  });

  return response.data;
}

export default network;
