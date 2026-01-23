import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/mainPage';

test('Проверка доступности элементов хедера неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категории неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов попапа уведомлений неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopupList();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна авторизации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
test('Переключение темы', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('light');
});
