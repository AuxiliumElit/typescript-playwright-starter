import { Locator, Page, expect } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;
  readonly nameTextField: Locator;
  readonly phoneTextField: Locator;
  readonly emailTextField: Locator;
  readonly submitNowFormButton: Locator;
  readonly contactFormAlertMessage: string;

  constructor(page: Page) {
    this.page = page;
    this.nameTextField = page.locator('[name="name"]');
    this.phoneTextField = page.locator('[name="phone"]');
    this.emailTextField = page.locator('[name="email"]');
    this.submitNowFormButton = page.getByRole('button', { name: 'Submit Now' });
    this.contactFormAlertMessage = 'Please fill out this field.';
  }

  async verifyNameTextFieldAlert() {
    const alert = await this.nameTextField.evaluate(
      (e) => (e as HTMLInputElement).validationMessage
    );
    expect(alert).toEqual(this.contactFormAlertMessage);
  }

  async verifyPhoneTextFieldAlert() {
    const alert = await this.phoneTextField.evaluate(
      (e) => (e as HTMLInputElement).validationMessage
    );
    expect(alert).toEqual(this.contactFormAlertMessage);
  }

  async verifyEmailTextFieldAlert() {
    const alert = await this.emailTextField.evaluate(
      (e) => (e as HTMLInputElement).validationMessage
    );
    expect(alert).toEqual(this.contactFormAlertMessage);
  }

  async clickSubmitNowFormButton() {
    await this.submitNowFormButton.click();
  }

  async enterNameInContactForm(name: string) {
    await this.nameTextField.fill(name);
  }

  async enterPhoneNumberInContactForm(phoneNumber: number) {
    await this.phoneTextField.fill(phoneNumber.toString());
  }

  async enterEmailNumberInContactForm(email: string) {
    await this.emailTextField.fill(email);
  }

  async verifyNameInContactForm(name: string) {
    expect(await this.nameTextField.inputValue()).toEqual(name);
  }

  async verifyPhoneNumberInContactForm(phoneNumber: number) {
    expect(await this.phoneTextField.inputValue()).toEqual(
      phoneNumber.toString()
    );
  }

  async verifyEmailInContactForm(email: string) {
    expect(await this.emailTextField.inputValue()).toEqual(email);
  }
}
