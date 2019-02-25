const appBannerController=require('./app-bannner-controller');
const appHeaderController=require('./app-header-controller');


const render = () => {
    appHeaderController.render();
    appBannerController.render();    
}

module.exports = { render }