import test from '@playwright/test';
import { MainPage } from '../../pages/mainPage';

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категории', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapshot();
});
