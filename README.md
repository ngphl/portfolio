# My portfolio project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

This application serves double as my portfolio and submission for IFN666 Assessment 2. All the information in this portfolio is publicly available in Linkedin, Github, Leetcode, etc...

## Feature

This portfolio website features 5 distinct pages:
1. Home
   - Includes Welcome Section
   - Contact Me section
2. About
   - Detail description
3. Resume
   - Overview of Career
   - Skillset
   - Career History
   - Education
4. Portfolio
   - Display Projects from GitHub
   - Display Leetcode Achievement
5. Project Page
   -Display in-depth detail about the Project (Access from the Portfolio page)

## Application Architecture

![image](https://github.com/ngphl/portfolio/assets/72726562/64b86096-566b-4aea-9b97-fc75a5a20cb4)

All the page files located inside "page" folder, accessed by Router by React

Different components are located in "components" folder for usage across the application

Leetcode and Github API to fetch data located in "API" folder

All assets such as pictures are located in "assets" folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Dependencies

- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) v5.17.0
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) v13.4.0
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) v13.5.0
- [bootstrap](https://www.npmjs.com/package/bootstrap) v5.3.3
- [react](https://www.npmjs.com/package/react) v18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom) v18.2.0
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) v6.22.3
- [react-scripts](https://www.npmjs.com/package/react-scripts) v5.0.1
- [react-select](https://www.npmjs.com/package/react-select) v5.8.0
- [web-vitals](https://www.npmjs.com/package/web-vitals) v2.1.4

## Installation

To install the dependencies, run the following command:

```bash
npm install (dependencies)
```

## Contributing

Contributions are welcome! Here's how you can contribute to the development of this application:

1. **Fork the repository**: Click the "Fork" button on the top right corner of this repository's page. This will create a copy of the repository in your GitHub account.

2. **Clone the repository**: Clone the forked repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/repository-name.git

3. Create a new branch: Move into the repository's directory on your local machine and create a new branch to work on your feature or bug fix:

  ```bash
   cd repository-name
   git checkout -b feature-name
  ```
Replace feature-name with a descriptive name for your feature or bug fix.

4. Make your changes: Make the necessary changes to the codebase using your preferred text editor or IDE.
  
5. Commit your changes: Once you've made your changes, commit them to your local repository:

   ```bash
   git add .
   git commit -m "Brief description of your changes"
   ```
   
 6. Push your changes: Push your changes to your forked repository on GitHub:
  ```bash
  git push origin feature-name
  ```
7. Create a Pull Request: Go back to the original repository on GitHub and click the "New Pull Request" button. Fill out the necessary details and submit the pull request.
8. Review and merge: Once your pull request is submitted, it will be reviewed by the project maintainers. If everything looks good, your changes will be merged into the main branch.

## How to Report Issues

If you encounter any issues with the application or have suggestions for improvements, please feel free to report them. To report an issue, follow these steps:

1. Navigate to the [Issues](https://github.com/yourusername/yourrepositoryname/issues) tab of this repository.

2. Click on the "New Issue" button.

3. Provide a clear and descriptive title for the issue.

4. In the issue description, include the following details:
   - Steps to reproduce the issue, if applicable.
   - Expected behavior.
   - Actual behavior.
   - Any error messages or screenshots, if available.

5. Add appropriate labels to categorize the issue (e.g., bug, enhancement, question).

6. Click on the "Submit new issue" button to create the issue.

