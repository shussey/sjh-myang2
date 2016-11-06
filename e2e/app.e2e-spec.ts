import { Myang2Page } from './app.po';

describe('myang2 App', function() {
  let page: Myang2Page;

  beforeEach(() => {
    page = new Myang2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
