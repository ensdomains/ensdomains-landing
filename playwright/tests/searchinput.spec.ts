import { test, expect } from '@playwright/test'

test.describe('SearchInput', () => {
  test('appends .eth if not present and navigates correctly', async ({
    page,
  }) => {
    await page.goto('/')
    const input = page.locator('input[name="ens"]')
    await input.fill('jefflau')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL(/jefflau\.eth/)
  })

  test('does not append .eth if already present', async ({ page }) => {
    await page.goto('/')
    const input = page.locator('input[name="ens"]')
    await input.fill('jefflau.eth')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL(/jefflau\.eth/)
    await expect(page).not.toHaveURL(/jefflau\.eth\.eth/)
  })
})
