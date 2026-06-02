import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  title = this.page.locator('.title');
  addBackpack = this.page.locator('#add-to-cart-sauce-labs-backpack');
  cartIcon = this.page.locator('.shopping_cart_link');

  async addItemToCart() {
    await this.addBackpack.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}