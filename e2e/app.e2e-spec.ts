import { AngularReportesInteractivosPage } from './app.po';

describe('angular-reportes-interactivos App', () => {
  let page: AngularReportesInteractivosPage;

  beforeEach(() => {
    page = new AngularReportesInteractivosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
