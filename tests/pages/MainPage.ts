import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsbLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly authorizationModalLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabsbLocator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopupListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationsPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.authorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала channel74958999' });
    this.headerUserMenuLocator = this.page.locator('.wdp-header-user-module__menu');
  }

  //actions

  async open() {
    this.page.goto('https://rutube.ru/');
  }
  async openHeaderUserMenu() {
    this.userLogoLocator.click();
  }
  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async openAddPopupList() {
    this.headerAddButtonLocator.click();
  }
  async openNotificationsPopupList() {
    this.headerNotificationsButtonLocator.click();
  }
  async openAuthorizationModal() {
    this.headerLoginButtonLocator.click();
  }

  //assertions

  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonPopupListLocator, 'addButtonPopupList.yml');
  }
  async notificationsPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationsPopupLocator, 'notificationsPopup.yml');
  }
  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authorizationModalLocator, 'authorizationModal.yml');
  }
  async fullMenuHasCorrectAriaSnapshot() {
    await expect(this.openMenuAriaLocator).toBeVisible();

    await expect(this.page.getByRole('button', { name: 'Моё' })).toBeVisible();

    await expect(this.page.getByRole('link', { name: 'Подписки' })).toHaveAttribute(
      'href',
      '/my/subscriptions/',
    );

    await expect(this.page.getByRole('button', { name: 'По темам' })).toBeVisible();

    const loginButton = this.openMenuAriaLocator.getByRole('button', {
      name: 'Вход и регистрация',
    });

    const isAuthorized = (await loginButton.count()) === 0;

    if (isAuthorized) {
      await expect(loginButton).toHaveCount(0);
    } else {
      await expect(loginButton).toBeVisible();
    }
  }
  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuSnapshot.yml');
  }
  async checkThemeAttributeValue(attributeValue: 'dark' | 'light') {
    await expect(this.page.locator('html')).toHaveAttribute('data-themeid', attributeValue);
  }
  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
  }
  async categoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabsbLocator, 'categoriesTabsSnapshot.yml');
  }
  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuSnapshot.yml');
  }
}
