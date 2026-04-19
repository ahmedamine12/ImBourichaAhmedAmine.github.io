# Ahmed Amine Bouricha - Personal Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as a Software Engineer. Built with React and featuring interactive 3D effects, dark/light mode toggle, multilingual support (English/French), and an AI chatbot.

## 🌐 Live Demo

Visit the live portfolio: [https://ahmedamine12.github.io/ImBourichaAhmedAmine.github.io/](https://ahmedamine12.github.io/ImBourichaAhmedAmine.github.io/)

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle with smooth transitions and Easter egg
- **Multilingual Support**: English and French translations using i18next
- **Interactive 3D Effects**: Parallax card tilt on hover for skills and project cards
- **AI Chatbot**: Integrated chatbot for user interaction
- **Smooth Animations**: Section fade-ins, floating blobs, and profile image crossfade
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured content
- **Performance Focused**: Optimized build with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router
- **Styling**: CSS Modules, Custom CSS with glassmorphism effects
- **Internationalization**: i18next, react-i18next
- **Icons**: React Icons (Fa, Md, Vsc, etc.)
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages
- **Version Control**: Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmedamine12/ImBourichaAhmedAmine.github.io.git
   cd ImBourichaAhmedAmine.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

The project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

This builds the app and publishes it to the `gh-pages` branch.

## 📁 Project Structure

```
src/
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   ├── HeaderSocials.jsx
│   │   └── CTA.jsx
│   ├── nav/
│   │   └── Nav.jsx
│   ├── about/
│   │   └── About.jsx
│   ├── skills/
│   │   └── Skills.jsx
│   ├── portfolio/
│   │   └── Portfolio.jsx
│   ├── contact/
│   │   └── Contact.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── chatbot/
│   │   └── Chatbot.jsx
│   └── ThankYouModal.jsx
├── hooks/
│   └── useTilt.js
├── locales/
│   ├── en.json
│   └── fr.json
├── assets/
├── App.jsx
├── index.js
├── i18n.js
└── index.css
```

## 🎨 Customization

### Adding New Projects
Edit `src/locales/en.json` and `src/locales/fr.json` to add new projects in the `projects.list` and `projects.academicList` arrays.

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: `src/components/[component]/[component].css`

### Changing Colors/Themes
Update CSS custom properties in `src/index.css` under `:root` and `[data-theme="dark"]`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Ahmed Amine Bouricha**
- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@ahmedamine12](https://github.com/ahmedamine12)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from various portfolio designs
- Create React App for the initial setup

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
