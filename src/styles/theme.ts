export const theme = {
  colors: {
    primary: '#3a86ff',
    secondary: '#2b2d42',
    accent: '#ff6b6b',
    background: '#ffffff',
    backgroundDark: '#f8f9fa',
    backgroundAccent: '#edf2fb',
    text: '#2b2d42',
    textSecondary: '#555b6e',
    border: '#e5e7eb',
    success: '#2a9d8f',
    danger: '#e63946',
  },
  fonts: {
    main: 'Poppins, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '4px',
    default: '8px',
    large: '12px',
    full: '9999px',
  },
};