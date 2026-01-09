import test from '@playwright/test';
import { MainPage } from '../../pages/mainPage';

test('Открытие главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
