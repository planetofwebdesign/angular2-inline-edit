import { Angular2InlineEditPage } from './app.po';

describe('angular2-inline-edit App', () => {
  let page: Angular2InlineEditPage;

  beforeEach(() => {
    page = new Angular2InlineEditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
