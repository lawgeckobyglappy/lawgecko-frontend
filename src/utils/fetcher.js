import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";

export const fetcher = axios.create({
  baseURL: API_URL,
});

fetcher.interceptors.request.use((config) => {
  // Retrieve the token from where it is stored (e.g., local storage or Vuex store)
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

fetcher.interceptors.response.use(
  
  (response) => response.data,
  (error) => {
    const errorResponse = error.response;

    console.log(errorResponse)

    if (errorResponse) {
      const data = errorResponse.data;
      const errorMessage =
        data.error.payload.email?.reasons[0] ||
        data.error.payload.phoneNumber?.reasons[0] ||
        data.error.message;
      ("An error occured");
      throw new Error(errorMessage);
    }

    throw new Error("Network Error");
  }
);
