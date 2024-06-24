# Commit Activity Graph

## Implementation Details

This project fetches and displays commit activity data from the GitHub API using `Next.js` v14. It leverages `server components` for `server actions` and `client components` for interactive UI rendering on the client side.

## Tech Stack

- `Next.js` - v14 for hybrid server-side rendering and client-side rendering.
- `React` - v18 for building interactive user interfaces.
- `TypeScript` - Ensures type safety and enhances developer experience.
- `Styled Components` - Used for styling components with CSS-in-JS.
- `react-device-detect` - for responsive design based on the user's device.
- `GitHub API` - Utilized for fetching commit activity data.

## Project Structure

The project structure is organized as follows:

- `./components`: Contains the CommitActivityGraph component and other reusable React components.
- `./lib`: Includes utility functions, and API integrations (GitHub API).
- `./types`: Holds common TypeScript types used across the project.
- `./public`: Static assets such as images and fonts.

## Commit Activity Graph

The CommitActivityGraph component fetches and displays commit activity data from the GitHub repository [facebook/react](https://github.com/facebook/react). It renders a graph showing the commit activity over time.

## API Integration

The CommitActivityGraph connects to the GitHub API at the following endpoint:

`https://api.github.com/repos/facebook/react/stats/commit_activity`

The API provides detailed commit activity statistics, allowing the component to visualize and present this data graphically.

## Installation

To run the project locally, run this command:

```
npm install
```

Make sure you have `Node.js` version 20 or higher installed on your machine.

## Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production deployment.
- `npm start`: Starts the production server after a successful build.
- `npm run lint`: Lints the codebase for coding standards and best practices.
- `npm test`: Runs tests related to the project using Jest.