import apiClient from "./apiClient";

export const startInterview = async (role, level) => {
  const response = await apiClient.post("/interview/start", {
    role,
    level,
  });

  return response.data;
};