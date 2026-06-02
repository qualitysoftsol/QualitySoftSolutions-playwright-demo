import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  title = this.page.locator('.title');
  checkoutBtn = this.page.locator('#checkout');

  async checkout() {
    await this.checkoutBtn.click();
  }
}