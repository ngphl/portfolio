import { LeetCode } from "leetcode-query";
import React, { useState, useEffect } from "react";

function useLeetcode() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    loading,
    leetcode,
    error,
  };
}

export default useLeetcode;



async function getLeetcode() {
/*Backup URL API https://leetcodestats.cyclic.app/{USERNAME} */
  const url = "https://leetcode-api-faisalshohag.vercel.app/npl2468";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data from Leetcode API");
  }
  return await response.json();
}



