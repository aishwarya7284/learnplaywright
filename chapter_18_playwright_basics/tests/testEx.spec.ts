import { test, expect } from '@playwright/test'

test("verify the TTK page", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page.waitForTimeout(5000);

});