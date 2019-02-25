const appBannnerView=require('../views/app-banner.html')


const  render= () => {

    $("#app #banner").html(appBannnerView);
    creatSwiper();

    function creatSwiper(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            // autoplay:1000,
            // 如果需要分页器
            pagination: '.swiper-pagination',
          });  
    }

}

module.exports={render};