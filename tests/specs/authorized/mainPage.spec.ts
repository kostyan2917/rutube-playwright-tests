import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/mainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов попапа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationsPopupList();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
