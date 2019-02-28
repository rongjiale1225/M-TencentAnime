const navTopView = require('../views/app-navTop.html');

let bool=true;
const render = () => {
    $('.navBox').html(navTopView);
    animateY();
}


function animateY(){
    $('.menu').on('click',(e) => {
        if(bool){
            $('.navTop').css('opacity','1');
            $('.mask').css({
                'transform':'translateY(0)',
            });
            $('.main').css('z-index','10')
        }
        if(!bool){
            $('.mask').css({
                'transform':'translateY(-9.333333rem)',
            });
            $('.navTop').css('opacity','0');
            $('.main').css('z-index','22')
        }
      bool=!bool;
    })
}

module.exports={
    render
}