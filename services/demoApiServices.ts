import { APIRequestContext } from '@playwright/test';
import apiDemoPayload from '../test-data/demo-api-body.json';

export class DemoApiServices {
  readonly request: APIRequestContext;
  readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = `${process.env.API_BASE_URL}`;
  }

  async demoGetResponse() {
    const response = await this.request.get(`${this.baseUrl}/products`);
    return await response.json();
  }

  async demoPostResponse() {
    const response = await this.request.post(
      `${this.baseUrl}/products`,
      {
        data: apiDemoPayload.data,
      }
    );
    return await response.json();
  }

  async demoPutResponse(productId: number, price: number) {
    const payload = apiDemoPayload.data;
    payload.price = price;
    const response = await this.request.put(
      `${this.baseUrl}/products/${productId}`,
      {
        data: payload,
      }
    );
    return await response.json();
  }
}
