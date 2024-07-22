# Smart City Dashboard Frontend

<img src="https://res.cloudinary.com/dqx0fhscj/image/upload/v1721631991/ns0bibunhrx92ohye9bd.png" />

Welcome to the **Smart City Dashboard Frontend** repository. This project is built using Next.js and provides a user-friendly interface for the Smart City Dashboard API.

## Table of Contents

1. [Getting Started](#📌-getting-started)
2. [Features](#✨-features)
3. [Tech Stack](#🧰-tech-stack)
4. [Project Structure](#📂-project-structure)
5. [Available Scripts](#📜-available-scripts)
6. [API Integration](#🔗-api-integration)
7. [Environment Variables](#🌍-environment-variables)
8. [Security](#🔐-security)
9. [Future Enhancements](#🚀-future-enhancements)
10. [Contact](#📞-contact)

## 📌 Getting Started

To get started with the Smart City Dashboard Frontend, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:fk00750/smart-city-dashboard-frontend.git
   cd smart-city-dashboard-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ✨ Features

- **Real-time Weather Updates**: Get current weather information for your city.
- **Latest News Headlines**: Stay updated with the latest news headlines.
- **User Authentication**: Register and log in to access personalized features.
- **Responsive Design**: Works on all devices, ensuring a great user experience.
- **AI Email Feature**: Send emails created by Gemini through Zapier with a single click.

## 🧰 Tech Stack

- Next.js
- React
- Tailwind CSS
- Axios

## 📂 Project Structure

```
smartCityDashboardUI
├── .eslintrc.json
├── .gitignore
├── README.md
├── api
│   └── index.js
├── components
│   ├── common
│   │   ├── footer
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   ├── header
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   ├── layout
│   │   │   └── index.js
│   │   ├── login-form
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   └── register-form
│   │       ├── index.js
│   │       └── index.module.css
│   └── home
│       ├── about-us
│       │   └── index.js
│       ├── home
│       │   ├── index.js
│       │   └── index.module.css
│       ├── index.module.css
│       ├── news-headline
│       │   ├── index.js
│       │   └── index.module.css
│       ├── news-post
│       │   ├── index.js
│       │   └── index.module.css
│       └── weather-card
│           ├── index.js
│           └── index.module.css
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   ├── login
│   │   ├── index.js
│   │   └── index.module.css
│   ├── profile
│   │   ├── index.js
│   │   └── index.module.css
│   └── register
│       ├── index.js
│       └── index.module.css
├── styles
│   └── globals.css
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tailwind.config.js
```

## 📜 Available Scripts

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run start`**: Starts the production build.
- **`npm run lint`**: Lints the codebase.

## 🔗 API Integration

API calls are managed using Axios. All API Endpoints are encapsulated in the `api/index.js` file, making it easy to maintain and manage API requests.

- API link - [SmartCityDashboard API](https://smartcityserver-prod.onrender.com)

## 🔐 Security

- Ensure that sensitive data such as API keys and secrets are not committed to the repository.
- Use environment variables for configuration settings.
- Regularly update dependencies to patch security vulnerabilities.

## 🚀 Future Enhancements

To further improve the functionality and user experience of the Smart City Dashboard Frontend, the following features can be considered for future development:

- **Responsive Design**: Improve the responsive design for better user experience on mobile devices.
- **User Notifications**: Implement user notifications for real-time updates.
- **Localization**: Add support for multiple languages to cater to a diverse user base.
- **Performance Optimization**: Optimize the performance of the application by leveraging Next.js features like static site generation (SSG) and incremental static regeneration (ISR).

## 📞 Contact

For any questions or issues, please contact [Faiz Ali Khan](fk7384329@gmail.com).
