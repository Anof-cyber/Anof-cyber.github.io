# Portfolio Website

This is a personal portfolio website built with React and TypeScript. It showcases my skills, projects, experience, and tools as a security engineer, penetration tester, and open-source developer.

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Dynamic Content**: Utilizes React components to display dynamic content such as skills, projects, and experience.
- **Custom Hooks**: Implements custom hooks for handling media queries and other reusable logic.
- **Routing**: Uses `react-router-dom` for seamless navigation between different pages of the portfolio.
- **Styled Components**: Incorporates CSS for styling, with a focus on a unique and modern design that reflects my professional background.

## Project Structure

```
portfolio-website
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── components
│   │   ├── common
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Navbar.tsx
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── sections
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Experience.tsx
│   │       ├── Hero.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── Tools.tsx
│   ├── data
│   │   ├── projectsData.ts
│   │   ├── skillsData.ts
│   │   ├── toolsData.ts
│   │   └── experienceData.ts
│   ├── hooks
│   │   └── useMediaQuery.ts
│   ├── pages
│   │   ├── HomePage.tsx
│   │   └── ProjectPage.tsx
│   ├── styles
│   │   ├── global.css
│   │   ├── theme.ts
│   │   └── variables.css
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── routes.tsx
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Anof-cyber/Anof-cyber.github.io
   ```

2. Navigate into the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the website.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.