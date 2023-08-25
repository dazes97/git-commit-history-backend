# Backend for Git Commit History

The Git Commit History Backend is a server-side application that complements the Git Commit History project. It's responsible for fetching and serving commit data from selected repositories and branches.

## Project Overview

- **Technology Stack:** This backend is built using NestJS, a powerful Node.js framework. It leverages the Class Validator library for request validation, integrates Swagger for API documentation, and uses Axios and RxJS for efficient HTTP requests and asynchronous operations.

- **Fetching Commits:** The primary purpose of this backend is to provide a RESTful API that allows users to retrieve commit history from specific repositories and branches. Users can select a repository (either 'git-commit-history-frontend' or 'git-commit-history-backend') and a branch (either 'master' or 'develop') to retrieve relevant commit information.

## How to Use

1. **Clone the Repository:** To set up the backend, clone this repository to your local development environment.

2. **Installation:** Follow the installation instructions to install dependencies and configure environment variables.

- create a .env file, copy the variables in .env.example 
- set values:
- SERVER_PORT=5000 (make sure is the same in the frontend repository)
- GITHUB_API_BASE_URL=https://api.github.com/repos/dazes97/
- GITHUB_API_TOKEN= (sent by email)
- ORIGIN_URL=http://localhost (the frontend you chose)
- ORIGIN_PORT=3000 (the frontend you chose)
- NODE_ENV=development (enable swagger)
- run "npm run start:dev"
- enjoy!

3. **API Documentation:** The backend includes Swagger documentation, which can be accessed by navigating to `http://localhost:5000/api` after starting the server. It provides detailed information about the available endpoints and how to use them.

4. **Fetching Commits:** You can use the API endpoint `/commits` to fetch commits for a selected repository and branch.

Ensure that the repository name is one of the specified options ('git-commit-history-frontend' or 'git-commit-history-backend') and that the branch name is either 'master' or 'develop'.

## Notes
CORS are Enable, Private keys and env files are going to be sent by email. For Security purposes I can't commit private keys