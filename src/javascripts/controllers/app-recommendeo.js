const appRecommendeoView=require('../views/app-recommendeo.html');

const render = () => {
      $('#app .recommendeo').html(appRecommendeoView)
}

module.exports={render};