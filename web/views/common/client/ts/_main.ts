import HomeController from '../../../home/client/ts/_homeController';
import AboutController from '../../../about/client/ts/_aboutController';

const pageType: string = $('body').attr('pageType');
if (pageType === 'HomePage') {
    let homeController = new HomeController();
} else if (pageType === 'AboutPage') {
    let aboutController = new AboutController();
}