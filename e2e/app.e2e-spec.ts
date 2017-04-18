import { SpringerNaturePage } from './app.po';

describe('springer-nature App', () => {
  let page: SpringerNaturePage;

  beforeEach(() => {
    page = new SpringerNaturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
