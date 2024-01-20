import { test } from '../../ui-test-config';

test.describe('Verify Positive Test Cases for Countact Us Page', () => {
  const testName: string = 'SuperTest';
  const testPhoneNumber: number = 2671234567;
  const testEmail: string = 'SuperEmail';

  test('Demo Test One: Verify if user is able to enter Name @smoke', async ({
    pageManager,
  }) => {
    await pageManager.onNavigationPage().clickContactUsHeaderButton();
    await pageManager.onContactUsPage().enterNameInContactForm(testName);
    await pageManager.onContactUsPage().verifyNameInContactForm(testName);
  });

  test('Demo Test Two: Verify if user is able to enter Phone Number @regression', async ({
    pageManager,
  }) => {
    await pageManager.onNavigationPage().clickContactUsHeaderButton();
    await pageManager
      .onContactUsPage()
      .enterPhoneNumberInContactForm(testPhoneNumber);
    await pageManager
      .onContactUsPage()
      .verifyPhoneNumberInContactForm(testPhoneNumber);
  });

  test('Demo Test Three: Verify if user is able to enter Email', async ({
    pageManager,
  }) => {
    await pageManager.onNavigationPage().clickContactUsHeaderButton();
    await pageManager
      .onContactUsPage()
      .enterEmailNumberInContactForm(testEmail);
    await pageManager.onContactUsPage().verifyEmailInContactForm(testEmail);
  });
});
