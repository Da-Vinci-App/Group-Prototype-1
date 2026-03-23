/// <reference types="vite/client" />

/**
 * CSS Module type declarations for Vite
 */
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
