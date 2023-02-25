$(document).ready(() =>{
    $('.text-box').slick({
        infinite:true,
        slidesToShow:1,
        dots: true,
        speed:300,
        arrows: false,
        autoplay:true,
        autoplayspeed: 4000,
    })
    new Glider(document.querySelector('.carousel'), {
        slidesToShow: 1,
        dots: true,
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next',
        }
      })
    })
