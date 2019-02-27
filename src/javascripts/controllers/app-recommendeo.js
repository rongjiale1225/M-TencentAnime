const appRecommendeoView=require('../views/app-recommendeo.html');
const {getRecommendeoData}=require('../moudels/app-index-moudel');

const render = async () => {

    let recommendeoList=await getRecommendeoData();
    console.log(JSON.parse(recommendeoList));
      $('#app .recommendeo').html(appRecommendeoView)
}

module.exports={render};