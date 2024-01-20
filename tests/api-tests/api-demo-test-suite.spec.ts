import { test, expect, request, APIRequestContext } from '@playwright/test';
import { DemoApiServices } from '../../services/demoApiServices';

test.describe('Demo API Test Cases', () => {
  const expectedRate = 3.9;
  const productId = 21;
  const updatedPrice = 12;

  test('Demo Test One: Verify Get Request @smoke', async ({ request }) => {
    const apiService = new DemoApiServices(request);
    const responseBody = await apiService.demoGetResponse();
    expect(responseBody[0].rating.rate).toEqual(expectedRate);
  });

  test('Demo Test Two: Verify POST Request @regression', async ({
    request,
  }) => {
    const apiService = new DemoApiServices(request);
    const responseBody = await apiService.demoPostResponse();
    expect(responseBody.id).toEqual(productId);
  });

  test('Demo Test Three: Verify PUT Request', async ({ request }) => {
    const apiService = new DemoApiServices(request);
    const responseBody = await apiService.demoPutResponse(
      productId,
      updatedPrice
    );
    expect(responseBody.id).toEqual(productId);
    expect(responseBody.price).toEqual(updatedPrice);
  });
});
