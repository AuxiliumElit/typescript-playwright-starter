import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly contactUsHeaderButton: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async someMethod() {}
}
