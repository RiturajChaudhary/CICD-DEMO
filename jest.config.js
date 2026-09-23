import nextJest from "next/jest.js";

// Providing the path to your Next.js app loads next.config.js and .env files
const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["<rootDir>/.next/"],
};

// createJestConfig is exported this way to ensure next/jest can load the Next.js config, which is async
export default createJestConfig(customJestConfig);