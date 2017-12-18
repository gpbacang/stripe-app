import { StripeAppPage } from './app.po';

describe('stripe-app App', () => {
  let page: StripeAppPage;

  beforeEach(() => {
    page = new StripeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
