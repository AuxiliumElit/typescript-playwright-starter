import { test } from '../../ui-test-config';

test.describe('Verify Negative Test Cases for Countact Us Page', () => {
  const testName: string = 'SuperTest';
  const testPhoneNumber: number = 2671234567;
  const testEmail: string = 'SuperEmail';

  test('Demo Test Four: Verify if Name id require once user click Submit button @regression', async ({
    pageManager,
  }) => {
    await pageManager.onNavigationPage().clickContactUsHeaderButton();
    await pageManager.onContactUsPage().clickSubmitNowFormButton();
    await pageManager.onContactUsPage().verifyNameTextFieldAlert();
  });

  test('Demo Test Five: Verify if Phone Number is require once user click Submit button @regression', async ({
    pageManager,
  }) => {
    await pageManager.onNavigationPage().clickContactUsHeaderButton();
    await pageManager.onContactUsPage().enterNameInContactForm(testName);
    await pageManager.onContactUsPage().clickSubmitNowFormButton();
    await pageManager.onContactUsPage().verifyPhoneTextFieldAlert();
  });

  test('Demo Test Six: Verify if Email is require once user click Submit button', async ({
    pageManager,
  }) => {
    await pageManager.onNavigationPage().clickContactUsHeaderButton();
    await pageManager.onContactUsPage().enterNameInContactForm(testName);
    await pageManager
      .onContactUsPage()
      .enterPhoneNumberInContactForm(testPhoneNumber);
    await pageManager.onContactUsPage().clickSubmitNowFormButton();
    await pageManager.onContactUsPage().verifyEmailTextFieldAlert();
  });
});
