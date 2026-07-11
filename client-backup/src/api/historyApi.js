import apiClient from "./apiClient";

export const getHistory = async () => {
  const response = await apiClient.get("/resume/history");

  return response.data;
};