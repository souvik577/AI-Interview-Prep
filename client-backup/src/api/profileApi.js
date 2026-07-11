import apiClient from "./apiClient";

export const getProfileStats = async () => {
  const response = await apiClient.get("/resume/profile");

  return response.data;
};