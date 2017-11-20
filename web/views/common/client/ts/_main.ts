import HomeController from '../../../home/client/ts/_homeController';

const pageType: string = $('body').attr('pageType');
if (pageType === 'HomePage') {
    let homeController = new HomeController();
}