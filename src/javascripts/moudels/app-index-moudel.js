const api = require('../api');

const  getRecommendeoData= () => {
    return api.request({url:'Recommend/get/?num=6&adpos=910&t=1551256663782&'});
}


module.exports={
    getRecommendeoData
}