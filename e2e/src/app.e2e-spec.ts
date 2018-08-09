import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ThumbsUp!');
  });

  it('should input value', () => {
    page.getInputField().sendKeys( 'Jochen' );
    page.wait( 3 );
    expect(page.getInputFieldValue()).toEqual( ' Jochen' );
  });
});
