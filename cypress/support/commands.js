// Retry click command with configurable options
Cypress.Commands.add('retryClick', { prevSubject: 'element' }, (subject, options = {}) => {
  const { maxRetries = 3, retryDelay = 1000 } = options;
  
  function attemptClick(attempt = 0) {
    return cy.wrap(subject)
      .click()
      .then(() => {
        Cypress.log({
          name: 'retryClick',
          message: `Successfully clicked after ${attempt} retries`
        });
      })
      .catch((error) => {
        if (attempt < maxRetries) {
          Cypress.log({
            name: 'retryClick',
            message: `Attempt ${attempt + 1} failed, retrying...`
          });
          cy.wait(retryDelay);
          return attemptClick(attempt + 1);
        }
        throw error;
      });
  }

  return attemptClick();
});

// Dynamic selector handling
Cypress.Commands.add('getElement', (primarySelector, fallbackSelector) => {
  return cy.get('body').then($body => {
    const primaryElement = $body.find(primarySelector);
    if (primaryElement.length > 0) {
      Cypress.log({
        name: 'getElement',
        message: `Found element with primary selector: ${primarySelector}`
      });
      return cy.wrap(primaryElement);
    }
    
    Cypress.log({
      name: 'getElement',
      message: `Primary selector failed, trying fallback: ${fallbackSelector}`
    });
    return cy.get(fallbackSelector);
  });
});

// Smart wait command
Cypress.Commands.add('smartWait', (selector, options = {}) => {
  const { timeout = 10000, interval = 500 } = options;
  
  return cy.get(selector, { timeout })
    .should(($element) => {
      expect($element).to.exist;
      expect($element).to.be.visible;
      if ($element.is('button, a, input')) {
        expect($element).to.not.be.disabled;
      }
    });
}); 