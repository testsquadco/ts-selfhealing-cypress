import BasePage from './BasePage';

class HomePage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      navButton: {
        primary: '.primary-nav-button',
        fallback: '[data-test="nav-button"]'
      },
      contentSection: '.content-section',
      mainContent: {
        primary: '.main-content',
        fallback: '[data-test="main-content"]'
      },
      contactButton: {
        primary: '.contact-button',
        fallback: '[data-test="contact-us"]'
      }
    };
  }

  visit() {
    cy.visit('/');
    this.waitForPageLoad();
    return this;
  }

  clickNavButton() {
    return this.getElement(
      this.selectors.navButton.primary,
      this.selectors.navButton.fallback
    ).retryClick();
  }

  waitForContentSection() {
    return this.smartWait(this.selectors.contentSection);
  }

  getMainContent() {
    return this.getElement(
      this.selectors.mainContent.primary,
      this.selectors.mainContent.fallback
    );
  }

  clickContactButton() {
    return this.getElement(
      this.selectors.contactButton.primary,
      this.selectors.contactButton.fallback
    ).retryClick({ maxRetries: 2 });
  }
}

export default HomePage; 