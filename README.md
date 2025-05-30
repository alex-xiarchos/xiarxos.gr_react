
# xiarxos.gr

**Responsive Personal Portfolio Website built with React and Tailwind CSS**

Personal portfolio site, designed and developed to reflect clean UI/UX principles, modular architecture, and a fully responsive layout with distinct experiences for desktop and mobile users.

## 🚀 Tech Stack

- **React** 19
- **Tailwind CSS** 4
- **Vite** 6
- **ESLint** (custom config)

## 🧠 Features

- ⚛️ **Component-Based Architecture**: Each section is a modular React component (`Home`, `Experience`, `Projects`, etc.) following best practices for separation of concerns and reusability.
- 📱 **Responsive & Context-Aware Design**: Mobile users experience different components like `HomeMobile` for optimal UX depending on screen size.
- 📦 **External Data Files**: Project, experience, and social data are imported from standalone JS modules (`projectsData.js`, `experienceData.js`, etc.) keeping logic and content separate.
- 💡 **Reusable UI Elements**: Custom buttons and layout utilities are abstracted into dedicated components.

## 📁 Project Structure (Simplified)

```
src/
│
├── components/
│   ├── Header/
│   ├── Home.jsx
│   ├── HomeMobile.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   └── utilities/
│       └── Button.jsx
│
├── data/
│   ├── projectsData.js
│   ├── experienceData.js
│   └── socialsData.js
│
├── App.jsx
└── index.jsx
```
