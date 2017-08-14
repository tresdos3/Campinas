import { CampinasPage } from './app.po';

describe('campinas App', () => {
  let page: CampinasPage;

  beforeEach(() => {
    page = new CampinasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
