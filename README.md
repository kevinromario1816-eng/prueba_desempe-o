# 🎸 Landing Page – Rock Band (HTML & CSS Assessment)

## 📌 Project Overview

This project is a **starter template** for a performance assessment focused on building a responsive landing page for a rock band.

The goal is to transform this base into a **visually engaging, responsive, and well-structured website** that promotes the band, their identity, and upcoming events.

---

## 🎯 What is Expected

You are expected to:

* Build a complete landing page using **semantic HTML5**.
* Apply **CSS3 styles** to achieve a strong visual identity (rock style).
* Implement **responsive design** for both:

  * Desktop (>1024px)
  * Mobile
* Use **Flexbox and/or Grid** where appropriate.
* Ensure the page is **clean, readable, and well-organized**.

---

## 🧱 Project Structure

```
├── assets
│   ├── css
│   │   └── style.css
│   ├── icons
│   │   └── logo.ico
│   ├── img
│   │   ├── img-1.jpg ... img-10.jpg
│   │   └── guide.png
│   └── js
│       └── main.js
├── index.html
└── README.md
```

---

## 🧩 HTML Guidelines

Your `index.html` already includes the base structure.

You must:

* Use semantic tags:

  * `<header>`
  * `<nav>`
  * `<main>`
  * `<section>`
  * `<article>`
  * `<footer>`

* Include the following sections:

  * Hero (main visual section)
  * Events (band tour dates)
  * About (band info)
  * Multimedia (images or media content)

* Add at least one **unordered list (`<ul>`)**:

  * Influences
  * Values
  * Social links

* (Optional – Extra Points)

  * Use a **table (`<table>`)** for events


  * The project follows a semantic HTML5 structure, ensuring accessibility and a logical flow of information.
  Header & Navigation: Features a sticky-ready header with a logo and a navigation menu. It includes a functional hamburger button (.menu-toggle) specifically designed for mobile devices.
  Hero Section: A high-impact landing area that uses a clear "Call to Action" (CTA) to direct users to the upcoming tour dates.
  Events Table: Organized using the <table> element to display tour information (date, city, venue) clearly, providing a structured way for fans to find and "buy" tickets.

  About Section: Combines visual media and textual content using <article> and semantic lists 
  (<ul>) to describe the band's history and influences.
  Multimedia Gallery: A dedicated space for band photography, structured to work in tandem with JavaScript for an interactive viewing experience.
  Semantic Footer: Includes a dynamic copyright notice and social media links, using a clean list layout for easy navigation.

  👉 Focus on **clean structure and readability**.

---

## 🎨 CSS Guidelines

The provided `style.css` is intentionally minimal.


The visual identity of the project is built with a modern, dark-themed aesthetic, focusing on readability and responsive layouts.

Global Reset & Base Styles: Implements a full reset (box-sizing: border-box, margin: 0) and uses a clean sans-serif typography. The color palette features a high-contrast dark background (#3f3f3f) with off-white text (#f5f5f5) and red accents.

Hero Section: Features a full-width background image with a centered overlay, utilizing Flexbox for vertical alignment of headlines and call-to-action buttons.

Grid Layouts:
Events: Uses linear gradients for section transitions and styled tables for data presentation.
Media Gallery: Implements CSS Grid to display a 3-column photo gallery with hover effects and a synchronized large-scale viewer.
Responsive Design (Mobile First):
Desktop: Enhances the experience with hover animations and expanded navigation menus.
Mobile (< 768px): Adapts the layout by hiding the large media viewer, switching to single-column containers, and triggering a collapsible hamburger menu (.menu-toggle) to ensure usability on smaller screens.
---

## 📱 Responsive Design

Your site **must adapt** to different screen sizes.

Minimum requirement:

* Desktop layout (>1024px)
* Mobile layout

Hints:

* Stack elements vertically on mobile
* Consider navigation behavior (e.g., hamburger menu)
* Resize images and text properly

---

## 🖼️ Images & Assets

Inside `/assets/img` you will find:

* Multiple images (`img-1.jpg` to `img-10.jpg`)
* A visual reference: `guide.png`

Use these images to:

* Build the hero section
* Populate the gallery
* Add visual identity to the page

⚠️ The guide is a **reference**, not something to copy exactly.

---

## ⚙️ JavaScript (Optional)

This project includes a script that handles basic DOM manipulation to enhance user experience. Key features include:

Dynamic Footer Year: Automatically retrieves the current year using the Date() object and updates the element with the ID year to keep the copyright information up to date.
Navigation Toggle: A mobile-friendly toggle system. It monitors clicks on the #toggle element to switch the display of the #nav_buttons container between flex and none.
Media Viewer (Work in Progress): Includes logic intended to handle image previews by updating the source of a central viewer when a thumbnail is clicked.

---

## 📝 Good Practices

* Keep your code **clean and readable**
* Use indentation consistently
* Write comments when necessary (in English)
* Organize sections clearly

---

## 🚀 How to Run

1. Download or clone the project
2. Open `index.html` in your browser

No installation required.

---

## 🧠 Final Note

This project is not about copying a design exactly.

It is about:

* Understanding structure
* Making design decisions
* Applying responsive techniques

Your solution should reflect your own approach while meeting the requirements.

---

🔥 Good luck and rock on!
