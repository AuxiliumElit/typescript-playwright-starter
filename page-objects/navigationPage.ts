import { Locator, Page } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;
  readonly contactUsHeaderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactUsHeaderButton = page.locator('[class="theme-btn-6"]', {hasText: "Contact Us"}).first();
  }

  async clickContactUsHeaderButton() {
    await this.contactUsHeaderButton.click();
  }

}
