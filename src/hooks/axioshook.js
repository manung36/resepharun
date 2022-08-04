import { useEffect, useState } from "react";
import recipesInstance from "../apis/recipesInstance";

export const useAxios = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await recipesInstance.get(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { response, error, loading, fetchData };
};
