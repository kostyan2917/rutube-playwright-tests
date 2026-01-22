import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    try {
      await this.page.getByRole('button', { name: 'Ок', exact: true }).click({ timeout: 2000 });
    } catch {
      // cookies popup отсутствует — это нормально
    }
  }

  async closeOnboardingPopup() {
    const button = this.page.getByRole('button', { name: 'Закрыть' });

    try {
      await button.waitFor({ state: 'visible', timeout: 3000 });
      await button.click();
    } catch {
      // попап не появился — ок
    }
  }
  async closePushPopup() {
    const button = this.page.getByRole('button', { name: 'Не надо' });

    try {
      await button.waitFor({ state: 'visible', timeout: 3000 });
      await button.click();
    } catch {
      // попап не появился — ок
    }
  }
}
