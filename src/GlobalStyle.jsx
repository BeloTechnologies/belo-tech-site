// GlobalStyles.jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Primary Colors */
    --color-primary: #9d4edd;
    --color-primary-hover: #b665ff;
    --color-primary-rgb: 157, 78, 221;
    
    /* Background Colors */
    --color-background: #121212;
    --color-surface: #1e1e1e;
    --color-surface-elevated: #252525;
    
    /* Text Colors */
    --color-text-primary: #ffffff;
    --color-text-secondary: #a0a0a0;
    --color-text-tertiary: #6c6c6c;
    
    /* Border & Shadow */
    --color-border: #2a2a2a;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --shadow-light: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.2);
    --shadow-heavy: 0 8px 16px rgba(0, 0, 0, 0.3);
    
    /* Status Colors */
    --color-success: #4CAF50;
    --color-warning: #FFC107;
    --color-error: #F44336;
    --color-info: #2196F3;
    
    /* Spacing System */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-xxl: 3rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 20px;
    --radius-circle: 50%;
    
    /* Typography */
    --font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-xxl: 2rem;
    --font-size-xxxl: 3rem;
    
    /* Animation */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;

    font-family: var(--font-family);
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color-scheme: dark;
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    font-weight: 500;
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  a:hover {
    color: var(--color-primary-hover);
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: var(--space-md);
  }

  h1 {
    font-size: var(--font-size-xxxl);
    
    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }

  h2 {
    font-size: var(--font-size-xxl);
    
    @media (max-width: 768px) {
      font-size: var(--font-size-xl);
    }
  }

  h3 {
    font-size: var(--font-size-xl);
  }

  h4 {
    font-size: var(--font-size-lg);
  }

  p {
    margin-bottom: var(--space-md);
  }

  button {
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: var(--font-size-md);
    font-weight: 500;
    font-family: inherit;
    background-color: var(--color-surface);
    cursor: pointer;
    transition: all var(--transition-normal);
  }
  
  button:hover {
    border-color: var(--color-primary);
  }
  
  button:focus,
  button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-md);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;

export default GlobalStyle;
