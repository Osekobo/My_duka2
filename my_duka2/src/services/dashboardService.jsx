import axios from "axios";

const dashboard_url = import.meta.env.VITE_DASHBOARD_URL;

export const getDashboard = async () => {
  const response = await axios.get(dashboard_url);
  return response.data;
};
