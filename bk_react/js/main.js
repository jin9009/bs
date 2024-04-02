$(function(){
 
    $( ".hm img" ).click(function() {
        $(".menu").animate({marginRight:"75%"}, 300);
		$(".cross").stop().show().css("color","#fff");
     });	
    
     // 메뉴상세
     $(".mm >li> a").click(function(){
        
        if($(this).next().is(":visible"))
        {
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/ico_nav.png");
        }else{

        $(".sub").stop().slideUp(500);
        $(".menu  ul.mm >li> a").children("img").attr("src","img/ico_nav.png");
        $(this).next().stop().slideDown(500);
        $(this).children("img").attr("src","img/ico_nav_on.png");
        };	

     });


     // 메뉴종료
     $( ".cross" ).click(function() {
        $(".menu").animate({marginRight:"0"}, 300);
	//	$( ".hm img" ).stop().show();
			$(".cross").stop().hide();
   });

   
   $(".main_banner").slick({
        arrows:false,
        autoplay: true,
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplaySpeed: 3000
    });

    $(".slick_").slick({
        arrows:false,
        autoplay: true,
        dots:true,
        infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplaySpeed: 3000
    });


    function modalOn(){
        $(".modal_back").addClass("back_on");
       // $("body").addClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    function modalOff(){
        $(".modal_back").removeClass("back_on");
      //  $("body").removeClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    $(".hm img").click(function(){
        modalOn();
    });
    $(".cross").click(function(){
        modalOff();
    });
});