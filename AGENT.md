# AGENT.md - Gatsby Resume App

## Commands
- **Build**: `npm run build` (cleans cache and builds)
- **Dev**: `npm run develop` (starts development server)
- **Deploy**: `npm run deploy` (builds and deploys to gh-pages)
- **Clean**: `npm run clean` (removes .cache and public)
- **Format**: `npm run format` (prettier formatting)
- **Serve**: `npm run serve` (serves built site)

## Architecture
- **Framework**: Gatsby v5 (React-based static site generator)
- **Structure**: Single-page resume app with sidebar navigation
- **Config**: Site config in `config.js` (personal info, social links)
- **Components**: Layout, Sidebar, Scroll in `src/components/`
- **Pages**: Main index page in `src/pages/`
- **Styling**: SASS/SCSS with Bootstrap classes

## Code Style
- **Prettier**: Semicolons, single quotes, trailing commas (ES5)
- **React**: Class and functional components, PropTypes validation
- **Imports**: Relative paths, grouped by type (React, components, config)
- **Files**: PascalCase for components, camelCase for config
- **CSS**: Bootstrap utility classes, custom SASS in `assets/sass/`
