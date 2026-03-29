import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";

export const useDashboardData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDashboard();
      setData(result);
    };

    fetchData();
  }, []);

  return data;
};
