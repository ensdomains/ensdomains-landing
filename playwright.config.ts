import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './playwright/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    // storageState: 'playwright/.auth/storage.json',
    baseURL: process.env.CI ? 'http://127.0.0.1:8788' : 'http://localhost:3000',
  },
  webServer: {
    command: process.env.CI ? 'pnpm run:wrangler' : 'pnpm dev',
    url: process.env.CI ? 'http://127.0.0.1:8788' : 'http://localhost:3000',
    // port: process.env.CI ? 8788 : 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    stderr: 'pipe',
    stdout: 'pipe',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
