$(function(){
  $(".ham").click(function(){
    $(".menu").css({transform:'translateY(0px)'}),
    $(".ham").css({display:'none'})
  }),

  $(".close").click(function(){
    $(".menu").css({transform:'translateY(-1000px)'}),
    $(".ham").css({display:'block'})
  }),

  $("header .h_inner nav ul li").mouseover(function(){
   $(".dot",this).css({transform:'translateY(0px)'})
  }),
  $("header .h_inner nav ul li").mouseout(function(){
    $(".dot",this).css({transform:'translateY(-1000px)'})
   }),

   $(".menu .m_inner ul li").mouseover(function(){
    $(".spot",this).css({transform:'translateY(0px)'})
   }),
   $(".menu .m_inner ul li").mouseout(function(){
     $(".spot",this).css({transform:'translateY(-1000px)'})
    }),

  $(".t1_slick").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }),



  $(".t2_slick").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }),

  $(window).resize(function(){
    let w = innerWidth

    if(w >= 1200){
      $(".ham").css({display:'none'})
    }else{
      $(".ham").css({display:'block'})
    }

    if(w >= 1200){
      $(".menu").css({display:'none'})
    }else{
      $(".menu").css({display:'block'})
    }

  })



  



  /////////////
});


