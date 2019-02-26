
const appNavView=require('../views/app-nav.html');


const render = () => {
    $('#app .nav').html(appNavView);
}

module.exports={render}