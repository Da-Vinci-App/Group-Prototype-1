import '@testing-library/jest-dom';

/**
 * Type definitions for CSS Modules
 * Allows TypeScript to recognize CSS module imports
 */
declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
