import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

function UseDebounce(data: string) {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    let timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${data}`,
        );
        setResponse(res.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.response?.data?.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [data]);

  return { response, error, loading };
}
