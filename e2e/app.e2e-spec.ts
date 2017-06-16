import { AngularFrontPage } from './app.po';

describe('angular-front App', () => {
  let page: AngularFrontPage;

  beforeEach(() => {
    page = new AngularFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
