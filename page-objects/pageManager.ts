import { Page } from '@playwright/test';
import { HomePage } from './homePage';
import { NavigationPage } from './navigationPage';
import { ContactUsPage } from './contactUsPage';

export class PageManager {
  readonly page: Page;
  private readonly homePage: HomePage;
  private readonly navigationPage: NavigationPage;
  private readonly contactUsPage: ContactUsPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.navigationPage = new NavigationPage(this.page);
    this.contactUsPage = new ContactUsPage(this.page);
  }

  onNavigationPage() {
    return this.navigationPage;
  }

  onHomePage() {
    return this.homePage;
  }

  onContactUsPage() {
    return this.contactUsPage;
  }
}
