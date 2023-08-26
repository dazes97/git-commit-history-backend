# Backend for Git Commit History

The Git Commit History Backend is a server-side application that complements the Git Commit History project. It's responsible for fetching and serving commit data from selected repositories and branches.

## Project Overview

- **Technology Stack:** This backend is built using NestJS, a powerful Node.js framework. It leverages the Class Validator library for request validation, integrates Swagger for API documentation, and uses Axios and RxJS for efficient HTTP requests and asynchronous operations.

- **Fetching Commits:** The primary purpose of this backend is to provide a RESTful API that allows users to retrieve commit history from specific repositories and branches. Users can select a repository (either 'git-commit-history-frontend' or 'git-commit-history-backend') and a branch (either 'master' or 'develop') to retrieve relevant commit information.

## How to Use

1. **Clone the Repository:** To set up the backend, clone this repository to your local development environment.

2. **Installation:** By default the values are configured as described below:
- SERVER_PORT=5000
- GITHUB_API_BASE_URL=https://api.github.com/repos/dazes97/
- ORIGIN_URL=http://localhost
- ORIGIN_PORT=3000
- NODE_ENV=production

3. Run the following commands
- run `docker build -t [example-name] .` don't forget to replace "[]" with the name you choose
- run `docker run --name=[example-name] -p 5000:5000 [example-name]` 
- enjoy!

3. **API Documentation:** The backend includes Swagger documentation, which can be accessed by navigating to `http://localhost:5000/api` after starting the server. It provides detailed information about the available endpoints and how to use them **(make sure to set docker variable NODE_ENV to development)**.

4. **Fetching Commits:** You can use the API endpoint `/commits` to fetch commits for a selected repository and branch.

Ensure that the repository name is one of the specified options ('git-commit-history-frontend' or 'git-commit-history-backend') and that the branch name is either 'master' or 'develop'.

## Notes
CORS are enable by default only receive request from **http://localhost:3000**