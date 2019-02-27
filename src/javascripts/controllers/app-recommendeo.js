const appRecommendeoView=require('../views/app-recommendeo.html');
const {getRecommendeoData}=require('../moudels/app-index-moudel');

const render = async () => {

    let recommendeoList=await getRecommendeoData();
    console.log(JSON.parse(recommendeoList));
    let template = Handlebars.compile(appRecommendeoView)
      $('#app .recommendeo').html(
        template(JSON.parse(recommendeoList))
      )
}

module.exports={render};