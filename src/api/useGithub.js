import React, { useState, useEffect } from "react";

function useGithub() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [github, setGithub] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRepo();
        const reposWithUnknownLanguage = data.map((repo) => ({
          ...repo,
          language: repo.language || "Unknown",
          description: repo.description || "No Description",
          license: repo.license || "Null"
        }));
        setGithub(reposWithUnknownLanguage);
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
    github,
    error,
  };
}

export default useGithub;

async function getRepo() {
  const url = "https://api.github.com/users/ngphl/repos";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data from GitHub API");
  }
  return await response.json();
}
