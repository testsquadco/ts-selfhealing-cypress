# Cypress Self-Healing Test Automation PoC

This project demonstrates a self-healing test automation framework using Cypress with Page Object Model pattern and multi-environment support.

## Features

- Page Object Model implementation
- Multi-environment support (dev/staging/prod)
- Automatic retry mechanism for failed actions
- Dynamic selector handling with fallback options
- Intelligent wait conditions
- Enhanced logging and reporting

## Installation

1. Clone the repository
2. Install dependencies: `npm install`

## Running Tests

### Environment-specific Test Runs

Development environment:
```bash
npm run test:dev
```

Staging environment:
```bash
npm run test:staging
```

Production environment:
```bash
npm run test:prod
```

### Cypress Test Runner

Open Cypress Test Runner for specific environments:

```bash
npm run cy:open:dev    # Development
npm run cy:open:staging    # Staging
npm run cy:open:prod    # Production
```

## Project Structure

```
cypress/
├── config/
│   └── environments/
│       ├── development.json
│       ├── staging.json
│       └── production.json
├── pages/
│   ├── BasePage.js
│   └── HomePage.js
├── e2e/
│   └── self-healing.cy.js
└── support/
    └── commands.js
```

## Page Objects

The framework uses the Page Object Model pattern to encapsulate page-specific elements and actions. Each page object:

- Inherits from BasePage
- Contains page-specific selectors
- Implements page-specific actions
- Handles self-healing mechanisms

## Environment Configuration

Environment-specific configurations are stored in `cypress/config/environments/` and include:
- Base URLs
- API endpoints
- Environment-specific variables
