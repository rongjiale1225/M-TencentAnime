const appBannerController=require('./app-bannner-controller');
const appHeaderController=require('./app-header-controller');
const appNavController=require('./app-nav-controller');
const appRecommendeoController=require('./app-recommendeo');
const appNavTopController=require('./app-navTop-controller');


const render = () => {
    appHeaderController.render();
    appBannerController.render();  
    appNavController.render();
    appRecommendeoController.render();
    appNavTopController.render();
}

module.exports = { render }