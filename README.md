# J & J Scrapers CML Website

A simple, responsive single-page React website built with Vite for a metal scrap business. This project provides a professional online presence with contact functionality and service information.

![J & J Scrapers CML Website Screenshot](screenshot.png)

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)


## ✨ Features

- Responsive design for all device sizes
- Professional layout with hero section, services listing, and contact form
- Contact form with validation and success/error handling
- Clean, modern UI with a business-appropriate color scheme
- Easy to customize content and styling


## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jj-scrapers-website.git
cd jj-scrapers-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website should now be running at `http://localhost:5173`.

## 💻 Usage

### Development

Run the development server with hot reload:
```bash
npm run dev
```

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

```
jj-scrapers-website/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── placeholder.png
│   │   └── metal-scrap-hero.jpg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


## 📤 Deployment

### Netlify (Planned)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🛠️ Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Structure


## 🔍 Additional Notes

### Form Submission

The contact form currently doesn't send emails. To make it functional:
- [EmailJS](https://www.emailjs.com/) - Client-side email sending





