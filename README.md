# SaaS Dashboard – React Implementation

##  Objective
The goal of this project is to **implement the provided SaaS dashboard designs** (from Figma Dev Handoff) in **React**, ensuring **pixel-perfect accuracy** while adding **meaningful motion and microinteractions** for an enhanced user experience.

---

##  Tech Stack
- **React (Vite)** – Frontend framework  
- **Tailwind CSS** – Styling (utility-first, responsive design)  
- **Heroicons** – Icons  
- **Framer Motion** – Animations & microinteractions  
- **Deployed on** – Vercel / Netlify  

---

## Setup Instructions
Clone the repository and install dependencies:

## Clone the repository
git clone https://github.com/<your-username>/saas-dashboard.git

## Navigate into the project
cd saas-dashboard

## Install dependencies
npm install

## Start the development server
npm run dev
Open the app at http://localhost:5173 (if using Vite).


## Features
Pixel-perfect implementation of Figma SaaS dashboard designs
Layout with dark/light theme toggle
Sidebar navigation (Default → Orders Table, eCommerce → Dashboard)
Microinteractions: hover states, button animations, sidebar transitions
Search, pagination, and dynamic table updates
Fully modular React component structure


## Design Decisions
Tailwind CSS was chosen for rapid styling and dark mode support.
Framer Motion adds smooth transitions (sidebar open/close, hover animations).
Code is structured into components, layout, and pages for scalability.
Dark mode colors follow a consistent palette for accessibility and readability.

## Challenges & Improvements


Challenges
- Ensuring pixel-perfect match with Figma across breakpoints.
- Synchronizing sidebar navigation state with main content dynamically.
- Creating reusable components that still allow custom styling overrides.

Improvements
- Add unit tests (React Testing Library + Jest).
- Improve accessibility (ARIA roles, keyboard navigation).
- Extend sidebar routing with React Router.
- Integrate backend API for live order data instead of mock JSON.
  
## Deployment
The project is deployed here:
- Live Demo on Vercel
https://analytics-app-psi.vercel.app

