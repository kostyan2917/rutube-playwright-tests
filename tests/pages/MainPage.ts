import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsbLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabsbLocator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }
  async categoriesTabsHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabsbLocator).toMatchAriaSnapshot();
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
