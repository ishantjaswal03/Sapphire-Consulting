# Sapphire Consulting - React Application

This is the modern, responsive, and interactive frontend for Sapphire Consulting, built with React and Vite. It features advanced animations, glassmorphism design elements, and a static-hosting friendly architecture.

## 📂 Folder Structure

```
sapphire-react/
├── public/                  # Static assets (images, icons, contact.php)
├── src/
│   ├── assets/              # Source assets
│   ├── components/          # Reusable UI components
│   │   ├── CardNav.jsx      # Navigation card component
│   │   ├── CaseStudies.jsx  # Case studies carousel
│   │   ├── Contact.jsx      # Contact section wrapper
│   │   ├── ContactForm.jsx  # Contact form with validation
│   │   ├── ElectricBorder.jsx # Animated border effect
│   │   ├── Footer.jsx       # Site footer
│   │   ├── FuturisticCard.jsx # Card with holographic effects
│   │   ├── Hero.jsx         # Hero section with video background
│   │   ├── Modal.jsx        # Modal component
│   │   ├── Navbar.jsx       # Main navigation bar
│   │   ├── NeonGlassCard.jsx # Glassmorphism card with neon glow
│   │   ├── Partners.jsx     # Partners/Clients section
│   │   ├── PillNav.jsx      # Pill-style navigation menu
│   │   └── ProvenImpact.jsx # Statistics section with scroll animations
│   ├── hooks/               # Custom React hooks
│   │   └── useMobileHover.js # Hook for scroll-triggered hover effects on mobile
│   ├── pages/               # Page components
│   │   ├── CloudArchitecture.jsx
│   │   ├── DataAnalytics.jsx
│   │   ├── EducationalPlatforms.jsx
│   │   ├── HealthcareTechnology.jsx
│   │   ├── Home.jsx
│   │   └── MarketingTechnology.jsx
│   ├── App.jsx              # Main application layout and routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and Tailwind directives
├── .gitignore
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## 🚀 Tech Stack

-   **Framework**: [React](https://react.dev/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**:
    -   [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
    -   [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Routing**: [React Router DOM](https://reactrouter.com/) (HashRouter for static hosting)

## 🛠️ Setup & Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled assets. The application is configured to use relative paths (`base: './'`) and hash routing, making it suitable for deployment on any static hosting service (GitHub Pages, Netlify, Vercel, or a standard web server).

## ✨ Key Features

-   **Futuristic Design**: Implements a "glassmorphism" aesthetic with neon glows, animated borders, and rich gradients.
-   **Advanced Animations**:
    -   **Scroll-Triggered Effects**: Elements animate into view using GSAP ScrollTrigger.
    -   **Mobile Scroll Interactions**: Custom `useMobileHover` hook triggers "hover" effects on mobile devices as elements scroll into the viewport.
    -   **Interactive Cards**: Cards react to mouse movement with holographic borders and scaling effects.
-   **Responsive Layout**: Fully responsive design that adapts seamlessly from desktop to mobile screens.
-   **Contact Form**: Integrated contact form that posts data to a PHP backend (`contact.php`) for email delivery (requires a PHP-enabled server).

## 📝 Configuration

-   **ESLint**: Configured to ignore `motion` variable from Framer Motion to prevent false positive "unused variable" errors.
-   **Vite**: Configured with `base: './'` for relative asset paths.
-   **Tailwind**: Custom colors and animations defined in `tailwind.config.js`.

## 📧 Contact Form Backend

The `public/contact.php` file handles form submissions.
-   **Note**: This requires a PHP server to function. It will not work with `npm run dev`.
-   **Deployment**: Ensure your hosting provider supports PHP if you want the contact form to send emails.
