import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";

export const fetcher = axios.create({
  baseURL: API_URL,
});

fetcher.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorResponse = error.response;

    if (errorResponse) {
      const data = errorResponse.data;
      const errorMessage =
        data.error.payload.email?.[0] ||
        data.error.payload.username?.[0] ||
        data.error.message;
      ("An error occured");
      throw new Error(errorMessage);
    }

    throw new Error("Network Error");
  }
);
