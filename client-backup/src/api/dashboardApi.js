import apiClient from "./apiClient";

export const getDashboardStats = async () => {
  const response = await apiClient.get("/resume/profile");

  return response.data;
};