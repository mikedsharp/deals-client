import { DealsClientPage } from './app.po';

describe('deals-client App', function() {
  let page: DealsClientPage;

  beforeEach(() => {
    page = new DealsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
