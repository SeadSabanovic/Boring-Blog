import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setData(json);
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [url]);

  return {
    data,
    isLoading,
  };
};

export default useFetch;
