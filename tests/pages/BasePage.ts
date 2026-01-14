import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
  }

  async closeOnboardingPopup() {
    const popup = this.page.locator('.wdp-popup-module__popup');
    const closeButton = popup.getByRole('button', { name: 'Закрыть' });

    if (await popup.isVisible({ timeout: 1000 })) {
      await closeButton.click();
    }
  }
}
