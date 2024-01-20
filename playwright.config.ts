import { defineConfig, devices } from '@playwright/test';

require('dotenv').config({ path: `${__dirname}//properties//.env.qa` });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'ui-tests-chrome',
      testDir: './tests/ui-tests',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'ui-tests-firefox',
      testDir: './tests/ui-tests',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'api-tests',
      testDir: './tests/api-tests',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
