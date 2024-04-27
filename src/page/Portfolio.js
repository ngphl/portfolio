import React, { useState } from "react";
import Card from "../components/Card";
import useGithub from "../api/useGithub";
import useLeetcode from "../api/useLeetcode";

function Portfolio() {
  const { loading, github, error } = useGithub();
  const { loading_lc, leetcode, error_lc } = useLeetcode();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter repositories based on search term
  const filteredRepos = github.filter((repo) => {
    // Filter by name or language
    return (
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section className="portfolio-section">
      {/* Heading */}
      <div className="porfolio-heading">
        <h1>Portfolio</h1>
        <h4>Some of my work</h4>
        <div className="form__group field">
          {/* Search field to find specific Repo */}
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <label htmlFor="name" className="form__label">
            Search by name or language...
          </label>
        </div>
        {/* Search box */}
      </div>

      {/*Check if API is still loading/error/finished and Map each Repo into Cards*/}
      {loading ? (
        <h1 className="problem">Loading...</h1>
      ) : error ? (
        <h1 className="problem">{error.toString()}</h1>
      ) : (
        <div className="porfolio-work">
          {filteredRepos.map((repo) => (
            <Card repo={repo} />
          ))}
        </div>
      )}
      <hr className="divider" />
      {/*Check if API is still loading/error/finished and Display Leetcode information*/}
      {loading_lc ? (
        <h1 className="problem">Loading...</h1>
      ) : error_lc ? (
        <h1 className="problem">
          Error: Failed to fetch data from Leetcode API
        </h1>
      ) : (
        <section>
          <div className="leetcode-section">
            {/*Heading*/}
            <div className="leetcode-heading">
              <h1>I also do Leetcode!</h1>
              <a
                href="https://leetcode.com/u/npl2468/"
                style={{ textDecoration: "none" }}
              >
                <h4>My Profile</h4>
              </a>
            </div>
          </div>
          {/* Info section */}
          <div className="leetcode-info">
            <div className="leetcode-point">
              <h3>Ranking: {leetcode.ranking}</h3>
              <h3>Contribution Point: {leetcode.contributionPoint}</h3>
            </div>
            <div className="leetcode-stat">
              <div className="leetcode-problem">
                {/*Display Easy/Medium/Hard problem solved */}
                <h1 className="leetcode-title">Problem Solved:</h1>
                <h3>
                  {leetcode.easySolved} <span className="easy">Easy</span>
                </h3>
                <h3>
                  {leetcode.mediumSolved} <span className="medium">Medium</span>
                </h3>
                <h3>
                  {leetcode.hardSolved} <span className="hard">Hard</span>
                </h3>
              </div>
              <div className="leetcode-recent-problems">
                {/* Display Most 3 recent Unique Problem */}
                <h1 className="leetcode-title">Recent Problems:</h1>
                <div className="three-problem">
                  {leetcode.recentSubmissions &&
                    leetcode.recentSubmissions
                      .reduce((uniqueSubmissions, submission) => {
                        // Check if the title is not already in the uniqueSubmissions array (Function by ChatGPT)
                        if (
                          !uniqueSubmissions.find(
                            (uniqueSubmission) =>
                              uniqueSubmission.title === submission.title
                          )
                        ) {
                          uniqueSubmissions.push(submission);
                        }
                        return uniqueSubmissions;
                      }, [])
                      .slice(0, 3)
                      .map((submission, index) => (
                        <div key={index}>
                          <h3>
                            {submission.title}: {submission.statusDisplay}
                          </h3>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default Portfolio;
