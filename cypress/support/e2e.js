// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Prevent uncaught exceptions from failing tests
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

// Add custom behavior before each test
beforeEach(() => {
  // Clear cookies and localStorage between tests
  cy.clearCookies();
  cy.clearLocalStorage();
}); 