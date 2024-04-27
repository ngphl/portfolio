import { useState, useEffect } from "react";

function useLeetcode() {
  const [loading_lc, setLoading] = useState(true);
  const [error_lc, setError] = useState(null);
  const [leetcode, setLeetcode] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLeetcode();
        setLeetcode(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    loading_lc,
    leetcode,
    error_lc,
  };
}

export default useLeetcode;

async function getLeetcode() {
  /*Backup URL API https://leetcodestats.cyclic.app/{USERNAME} */
  const url = "https://leetcode-api-faisalshohag.vercel.appd/npl2468";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data from Leetcode API");
  }
  return await response.json();
}
