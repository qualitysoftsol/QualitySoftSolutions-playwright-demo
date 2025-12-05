import { Page } from '@playwright/test';

export class CheckoutStepTwoPage {
  constructor(private page: Page) {}

  finishBtn = this.page.locator('#finish');

  async finish() {
    await this.finishBtn.click();
  }
}