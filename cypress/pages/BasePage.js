class BasePage {
  constructor() {
    this.timeout = 10000;
  }

  getElement(primarySelector, fallbackSelector) {
    return cy.getElement(primarySelector, fallbackSelector);
  }

  smartWait(selector, options = {}) {
    return cy.smartWait(selector, { timeout: this.timeout, ...options });
  }

  retryClick(element, options = {}) {
    return element.retryClick({ maxRetries: 3, retryDelay: 1000, ...options });
  }

  waitForPageLoad() {
    return cy.window().its('document.readyState').should('eq', 'complete');
  }
}

export default BasePage; 