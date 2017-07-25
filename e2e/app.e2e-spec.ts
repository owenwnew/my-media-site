import { MyMediaSitePage } from './app.po';

describe('my-media-site App', () => {
  let page: MyMediaSitePage;

  beforeEach(() => {
    page = new MyMediaSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
