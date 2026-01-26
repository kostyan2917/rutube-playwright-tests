import { test as base } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { CategoriesPage } from '../pages/CategoriesPage';

// Declare the types of your fixtures.
type MyFixtures = {
  mainPage: MainPage;
  categoriesPage: CategoriesPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert();
    await mainPage.closeOnboardingPopup();
    await mainPage.closePushPopup();
    // Use the fixture value in the test.
    await use(mainPage);
  },
  categoriesPage: async ({ page }, use) => {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.open();
    await categoriesPage.closeCookiesAlert();
    await categoriesPage.closeOnboardingPopup();
    await categoriesPage.closePushPopup();
    await categoriesPage.hideHeader();

    await use(categoriesPage);
  },
});
export { expect } from '@playwright/test';
