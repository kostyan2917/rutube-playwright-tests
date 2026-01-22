import { test, expect } from '@playwright/test';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test.use({ storageState: authFile });

test('authorized user on rutube', async ({ page }) => {
  await page.goto('https://rutube.ru/');

  // проверяем, что мы залогинены
  await expect(page.getByRole('button', { name: 'Вход и регистрация' })).toHaveCount(0);

  await page.goto('https://rutube.ru/profile');
  await expect(page.getByText('Мой профиль')).toBeVisible();
});
