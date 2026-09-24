import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (apiFunction: () => Promise<any>) => {
    try {
      setLoading(true);
      setError("");

      const res = await apiFunction();

      setData(res.data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
